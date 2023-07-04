import {ChainForkConfig} from "@lodestar/config";
import {Db, Repository} from "@lodestar/db";
import {allForks, ssz} from "@lodestar/types";
import {getSignedBlockTypeFromBytes} from "../../util/multifork.js";
import {Bucket, getBucketNameByValue} from "../buckets.js";
import {IExecutionEngine} from "../../execution/index.js";
import {isSignedBlindedBeaconBlock} from "./blockBlindingAndUnblinding.js";

/**
 * Blocks by root
 *
 * Used to store unfinalized blocks
 */
export class BlockRepository extends Repository<Uint8Array, allForks.FullOrBlindedSignedBeaconBlock> {
  executionEngine?: IExecutionEngine;

  constructor(config: ChainForkConfig, db: Db) {
    const bucket = Bucket.allForks_block;
    const type = ssz.phase0.SignedBeaconBlock; // Pick some type but won't be used
    super(config, db, bucket, type, getBucketNameByValue(bucket));
  }

  setExecutionEngine(engine: IExecutionEngine): void {
    this.executionEngine = engine;
  }

  /**
   * Id is hashTreeRoot of unsigned BeaconBlock
   */
  getId(value: allForks.SignedBeaconBlock): Uint8Array {
    return this.config.getForkTypes(value.message.slot).BeaconBlock.hashTreeRoot(value.message);
  }

  encodeValue(value: allForks.SignedBeaconBlock): Buffer {
    return this.config.getForkTypes(value.message.slot).SignedBeaconBlock.serialize(value) as Buffer;
  }

  decodeValue(data: Buffer): allForks.SignedBeaconBlock {
    return getSignedBlockTypeFromBytes(this.config, data, isSignedBlindedBeaconBlock(data)).deserialize(data);
  }
}
