import {fromHexString} from "@chainsafe/ssz";
import {
  SYNC_COMMITTEE_SIZE,
  SYNC_COMMITTEE_SUBNET_COUNT,
  TARGET_AGGREGATORS_PER_COMMITTEE,
  TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE,
} from "@lodestar/params";
import {beforeAll, describe, expect, it} from "vitest";
import {isAggregatorFromCommitteeLength, isSyncCommitteeAggregator} from "../../../src/util/aggregator.js";

describe("isAttestationAggregator", () => {
  const committeeLength = 130;

  beforeAll(() => {
    expect({
      TARGET_AGGREGATORS_PER_COMMITTEE,
    }).toEqual({
      TARGET_AGGREGATORS_PER_COMMITTEE: 16,
    });
  });

  it("should be false", () => {
    const result = isAggregatorFromCommitteeLength(
      committeeLength,
      fromHexString(
        "0x8191d16330837620f0ed85d0d3d52af5b56f7cec12658fa391814251d4b32977eb2e6ca055367354fd63175f8d1d2d7b0678c3c482b738f96a0df40bd06450d99c301a659b8396c227ed781abb37a1604297922219374772ab36b46b84817036"
      )
    );
    expect(result).toBe(false);
  });

  it("should be true", () => {
    const result = isAggregatorFromCommitteeLength(
      committeeLength,
      fromHexString(
        "0xa8f8bb92931234ca6d8a34530526bcd6a4cfa3bf33bd0470200dc8fa3ebdc3ba24bc8c6e994d58a0f884eb24336d746c01a29693ed0354c0862c2d5de5859e3f58747045182844d267ba232058f7df1867a406f63a1eb8afec0cf3f00a115125"
      )
    );
    expect(result).toBe(true);
  });
});

describe("isSyncCommitteeAggregator", () => {
  beforeAll(() => {
    expect({
      SYNC_COMMITTEE_SIZE,
      SYNC_COMMITTEE_SUBNET_COUNT,
      TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE,
    }).toEqual({
      SYNC_COMMITTEE_SIZE: 512,
      SYNC_COMMITTEE_SUBNET_COUNT: 4,
      TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE: 16,
    });
  });

  it("should be false", () => {
    const result = isSyncCommitteeAggregator(
      fromHexString(
        "0x8191d16330837620f0ed85d0d3d52af5b56f7cec12658fa391814251d4b32977eb2e6ca055367354fd63175f8d1d2d7b0678c3c482b738f96a0df40bd06450d99c301a659b8396c227ed781abb37a1604297922219374772ab36b46b84817036"
      )
    );
    expect(result).toBe(false);
  });

  // NOTE: Invalid sig, bruteforced last characters to get a true result
  it("should be true", () => {
    const result = isSyncCommitteeAggregator(
      fromHexString(
        "0xa8f8bb92931234ca6d8a34530526bcd6a4cfa3bf33bd0470200dc8fa3ebdc3ba24bc8c6e994d58a0f884eb24336d746c01a29693ed0354c0862c2d5de5859e3f58747045182844d267ba232058f7df1867a406f63a1eb8afec0cf3f00a115142"
      )
    );
    expect(result).toBe(true);
  });
});
