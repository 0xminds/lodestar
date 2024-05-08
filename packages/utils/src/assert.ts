export const assert = {
  /**
   * Assert condition is true, otherwise throw AssertionError
   */
  true(condition: boolean, message?: string): void {
    if (!condition) {
      throw new AssertionError(message || "Expect condition to be true");
    }
  },

  /**
   * Assert strict equality
   * ```js
   * actual === expected
   * ```
   */
  equal<T>(actual: T, expected: T, message?: string): void {
    if (!(actual === expected)) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new AssertionError(`${message || "Expected values to be equal"}: ${actual} === ${expected}`);
    }
  },

  /**
   * Assert not null
   * ```
   * actual !== null
   * ```
   */
  notNull<T>(actual: T | null, message?: string): asserts actual is T {
    if (!(actual !== null)) {
      throw new AssertionError(`${message || "Expected value to be not null"}`);
    }
  },

  /**
   * Assert less than or equal
   * ```js
   * left <= right
   * ```
   */
  lte(left: number, right: number, message?: string): void {
    if (!(left <= right)) {
      throw new AssertionError(`${message || "Expected value to be lte"}: ${left} <= ${right}`);
    }
  },

  /**
   * Assert less than
   * ```js
   * left < right
   * ```
   */
  lt(left: number, right: number, message?: string): void {
    if (!(left < right)) {
      throw new AssertionError(`${message || "Expected value to be lt"}: ${left} < ${right}`);
    }
  },

  /**
   * Assert greater than or equal
   * ```js
   * left >= right
   * ```
   */
  gte(left: number, right: number, message?: string): void {
    if (!(left >= right)) {
      throw new AssertionError(`${message || "Expected value to be gte"}: ${left} >= ${right}`);
    }
  },

  /**
   * Assert greater than
   * ```js
   * left > right
   * ```
   */
  gt(left: number, right: number, message?: string): void {
    if (!(left > right)) {
      throw new AssertionError(`${message || "Expected value to be gt"}: ${left} > ${right}`);
    }
  },
};

export class AssertionError extends Error {
  static code = "ERR_ASSERTION";
}
