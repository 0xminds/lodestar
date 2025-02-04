import {describe, expect, it} from "vitest";
import {getGlobalPaths} from "../../../src/paths/global.js";

describe("paths / global", () => {
  process.env.XDG_DATA_HOME = "/my-root-dir";
  const network = "mainnet";
  const defaultDataDir = `/my-root-dir/lodestar/${network}`;

  const testCases: {
    id: string;
    args: Parameters<typeof getGlobalPaths>[0];
    globalPaths: ReturnType<typeof getGlobalPaths>;
  }[] = [
    {
      id: "Default paths",
      args: {},
      globalPaths: {
        dataDir: defaultDataDir,
      },
    },
    {
      id: "Network paths",
      args: {network: "holesky"},
      globalPaths: {
        dataDir: "/my-root-dir/lodestar/holesky",
      },
    },
    {
      id: "Custom dataDir",
      args: {dataDir: "./attack-network"},
      globalPaths: {
        dataDir: "./attack-network",
      },
    },
  ];

  for (const {id, args, globalPaths} of testCases) {
    it(id, () => {
      expect(getGlobalPaths(args, args.network ?? network)).toEqual(globalPaths);
    });
  }
});
