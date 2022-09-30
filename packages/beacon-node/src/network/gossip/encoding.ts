import {compress, uncompress} from "snappyjs";
import {Message} from "@libp2p/interface-pubsub";
import {digest} from "@chainsafe/as-sha256";
import {intToBytes} from "@lodestar/utils";
import {ForkName} from "@lodestar/params";
import {RPC} from "@chainsafe/libp2p-gossipsub/message";
import {MESSAGE_DOMAIN_VALID_SNAPPY} from "./constants.js";
import {GossipTopicCache} from "./topic.js";

/**
 * The function used to generate a gossipsub message id
 * We use the first 8 bytes of SHA256(data) for content addressing
 */
export function fastMsgIdFn(rpcMsg: RPC.IMessage): string {
  if (rpcMsg.data) {
    const hash = digest(rpcMsg.data);
    return String.fromCharCode(hash[0], hash[1], hash[2], hash[3], hash[4], hash[5], hash[6], hash[7]);
  } else {
    return "0000000000000000";
  }
}

export function msgIdToStrFn(msgId: Uint8Array): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return Buffer.prototype.toString.call(msgId, "base64");
}

/**
 * Only valid msgId. Messages that fail to snappy_decompress() are not tracked
 */
export function msgIdFn(gossipTopicCache: GossipTopicCache, msg: Message): Uint8Array {
  const topic = gossipTopicCache.getTopic(msg.topic);

  let toHash: Uint8Array;

  switch (topic.fork) {
    // message id for phase0.
    // ```
    // SHA256(MESSAGE_DOMAIN_VALID_SNAPPY + snappy_decompress(message.data))[:20]
    // ```
    case ForkName.phase0:
      toHash = Buffer.allocUnsafe(MESSAGE_DOMAIN_VALID_SNAPPY.length + msg.data.length);
      toHash.set(MESSAGE_DOMAIN_VALID_SNAPPY);
      toHash.set(msg.data, MESSAGE_DOMAIN_VALID_SNAPPY.length);
      break;

    // message id for altair.
    // ```
    // SHA256(
    //   MESSAGE_DOMAIN_VALID_SNAPPY +
    //   uint_to_bytes(uint64(len(message.topic))) +
    //   message.topic +
    //   snappy_decompress(message.data)
    // )[:20]
    // ```
    // https://github.com/ethereum/eth2.0-specs/blob/v1.1.0-alpha.7/specs/altair/p2p-interface.md#topics-and-messages
    case ForkName.altair:
    case ForkName.bellatrix: {
      const topicBytes = getTopicBytes(msg.topic);
      let offset = 0;
      toHash = Buffer.allocUnsafe(MESSAGE_DOMAIN_VALID_SNAPPY.length + topicBytes.length + msg.data.length);
      toHash.set(MESSAGE_DOMAIN_VALID_SNAPPY);
      offset += MESSAGE_DOMAIN_VALID_SNAPPY.length;
      toHash.set(topicBytes, offset);
      offset += topicBytes.length;
      toHash.set(msg.data, offset);
      break;
    }
  }

  return digest(toHash).subarray(0, 20);
}

export class DataTransformSnappy {
  constructor(private readonly maxSizePerMessage: number) {}

  /**
   * Takes the data published by peers on a topic and transforms the data.
   * Should be the reverse of outboundTransform(). Example:
   * - `inboundTransform()`: decompress snappy payload
   * - `outboundTransform()`: compress snappy payload
   */
  inboundTransform(topicStr: string, data: Uint8Array): Uint8Array {
    // No need to parse topic, everything is snappy compressed
    return uncompress(data, this.maxSizePerMessage);
  }
  /**
   * Takes the data to be published (a topic and associated data) transforms the data. The
   * transformed data will then be used to create a `RawGossipsubMessage` to be sent to peers.
   */
  outboundTransform(topicStr: string, data: Uint8Array): Uint8Array {
    if (data.length > this.maxSizePerMessage) {
      throw Error(`ssz_snappy encoded data length ${length} > ${this.maxSizePerMessage}`);
    }
    // No need to parse topic, everything is snappy compressed
    return compress(data);
  }
}

const cachedTopicBytes = new Map<string, Buffer>();

/**
 * Only compute topic bytes for the 1st time.
 * See https://github.com/ethereum/consensus-specs/blob/v1.2.0/specs/altair/p2p-interface.md#the-gossip-domain-gossipsub
 */
function getTopicBytes(topic: string): Buffer {
  const cached = cachedTopicBytes.get(topic);
  if (cached) return cached;

  const bytes = Buffer.concat([intToBytes(topic.length, 8), Buffer.from(topic)]);
  cachedTopicBytes.set(topic, bytes);

  return bytes;
}
