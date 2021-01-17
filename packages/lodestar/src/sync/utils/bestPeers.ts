import PeerId from "peer-id";
import {Checkpoint, Status} from "@chainsafe/lodestar-types";
import {getSyncProtocols, INetwork} from "../../network";
import {toHexString} from "@chainsafe/ssz";

interface IPeerWithMetadata {
  peerId: PeerId;
  status: Status;
  score: number;
}

/**
 * Get peers that:
 * - support sync protocols
 * - their score > minScore
 * - status = most common finalied checkpoint
 */
export function getPeersInitialSync(network: INetwork, minScore = 60): IPeersByCheckpoint<Checkpoint> | null {
  const peers = getPeersThatSupportSync(network);
  const goodPeers = peers.filter((peer) => peer.score > minScore);
  return getPeersByMostCommonFinalizedCheckpoint(goodPeers);
}

function getPeersThatSupportSync(network: INetwork): IPeerWithMetadata[] {
  const peers: IPeerWithMetadata[] = [];

  for (const libp2pPeer of network.getPeers({supportsProtocols: getSyncProtocols()})) {
    const peerId = libp2pPeer.id;
    const status = network.peerMetadata.getStatus(peerId);
    const score = network.peerRpcScores.getScore(peerId);
    if (status) {
      peers.push({peerId, status, score});
    }
  }

  return peers;
}

/**
 * For initial sync, return the most common finalized checkpoint and consider it as the truth
 * If is important to have minimum amount of peers connected so the chance of connecting
 * only to malicious peers is low.
 *
 * Returns both the most common finalized checkpoint and the group or peers who agree on it
 */
function getPeersByMostCommonFinalizedCheckpoint(peers: IPeerWithMetadata[]): IPeersByCheckpoint<Checkpoint> | null {
  const peersByCheckpoint = groupPeersByCheckpoint(
    peers,
    (peer) => ({epoch: peer.status.finalizedEpoch, root: peer.status.finalizedRoot}),
    (checkpoint) => checkpoint.epoch.toString() + toHexString(checkpoint.root)
  );

  const sortedByMostCommon = peersByCheckpoint.sort((a, b) => {
    if (a.peers.length > b.peers.length) return -1;
    if (a.peers.length < b.peers.length) return 1;
    if (a.checkpoint.epoch > b.checkpoint.epoch) return -1;
    if (a.checkpoint.epoch < b.checkpoint.epoch) return 1;
    return 0;
  });

  const mostCommon = sortedByMostCommon[0];
  if (!mostCommon) return null;

  return {
    checkpoint: mostCommon.checkpoint,
    peers: mostCommon.peers.sort((a, b) => b.score - a.score),
  };
}

interface IPeersByCheckpoint<T> {
  checkpoint: T;
  peers: IPeerWithMetadata[];
}

/**
 * Groups peers by checkpoint as defined by `getCheckpointFromPeer` and `getCheckpointId`
 */
function groupPeersByCheckpoint<T>(
  peers: IPeerWithMetadata[],
  getCheckpointFromPeer: (peer: IPeerWithMetadata) => T,
  getCheckpointId: (checkpoint: T) => string
): IPeersByCheckpoint<T>[] {
  const peersByCheckpoint = new Map<string, IPeersByCheckpoint<T>>();

  for (const peer of peers) {
    const checkpoint = getCheckpointFromPeer(peer);
    const id = getCheckpointId(checkpoint);
    let checkpointPeers = peersByCheckpoint.get(id);
    if (checkpointPeers) {
      checkpointPeers.peers.push(peer);
    } else {
      checkpointPeers = {checkpoint, peers: [peer]};
    }
    peersByCheckpoint.set(id, checkpointPeers);
  }

  return Array.from(peersByCheckpoint.values());
}
