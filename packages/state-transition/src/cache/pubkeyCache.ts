import {PublicKey} from "@chainsafe/blst";
import {PubkeyIndexMap} from "@chainsafe/pubkey-index-map";
import {ValidatorIndex, phase0} from "@lodestar/types";

export type Index2PubkeyCache = PublicKey[];
export type PubkeyHex = string;

/**
 * toHexString() creates hex strings via string concatenation, which are very memory inefficient.
 * Memory benchmarks show that Buffer.toString("hex") produces strings with 10x less memory.
 *
 * Does not prefix to save memory, thus the prefix is removed from an already string representation.
 *
 * See https://github.com/ChainSafe/lodestar/issues/3446
 */
export function toMemoryEfficientHexStr(hex: Uint8Array | string): string {
  if (typeof hex === "string") {
    if (hex.startsWith("0x")) {
      hex = hex.slice(2);
    }
    return hex;
  }

  return Buffer.from(hex.buffer, hex.byteOffset, hex.byteLength).toString("hex");
}

/**
 * Checks the pubkey indices against a state and adds missing pubkeys
 *
 * Mutates `pubkey2index` and `index2pubkey`
 *
 * If pubkey caches are empty: SLOW CODE - 🐢
 */
export function syncPubkeys(
  validators: phase0.Validator[],
  pubkey2index: PubkeyIndexMap,
  index2pubkey: Index2PubkeyCache
): void {
  if (pubkey2index.size !== index2pubkey.length) {
    throw new Error(`Pubkey indices have fallen out of sync: ${pubkey2index.size} != ${index2pubkey.length}`);
  }

  const newCount = validators.length;
  index2pubkey.length = newCount;
  for (let i = pubkey2index.size; i < newCount; i++) {
    const pubkey = validators[i].pubkey;
    pubkey2index.set(pubkey, i);
    // Pubkeys must be checked for group + inf. This must be done only once when the validator deposit is processed.
    // Afterwards any public key is the state consider validated.
    // > Do not do any validation here
    index2pubkey[i] = PublicKey.fromBytes(pubkey); // Optimize for aggregation
  }
}
