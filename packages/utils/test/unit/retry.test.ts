import "../setup.js";
import {expect} from "chai";
import {retry, RetryOptions} from "../../src/retry.js";

describe("retry", () => {
  interface ITestCase {
    id: string;
    fn: (attempt: number) => Promise<any>;
    opts?: RetryOptions;
    result: any | Error;
  }

  const sampleError = Error("SAMPLE ERROR");
  const sampleResult = "SAMPLE RESULT";
  const retries = 3;

  const testCases: ITestCase[] = [
    {
      id: "Reject",
      fn: () => Promise.reject(sampleError),
      result: sampleError,
    },
    {
      id: "Resolve",
      fn: () => Promise.resolve(sampleResult),
      result: sampleResult,
    },
    {
      id: "Succeed at the last attempt",
      fn: (attempt) => {
        if (attempt < retries) throw sampleError;
        else return Promise.resolve(sampleResult);
      },
      opts: {retries},
      result: sampleResult,
    },
  ];

  for (const {id, fn, opts, result} of testCases) {
    it(id, async () => {
      if (result instanceof Error) {
        await expect(retry(fn, opts)).to.be.rejectedWith(result);
      } else {
        expect(await retry(fn, opts)).to.deep.equal(result);
      }
    });
  }
});
