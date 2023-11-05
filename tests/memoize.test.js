import * as F from "../src";

describe("memoize", () => {
    test("returns cached result for same arguments", () => {
        const square = jest.fn((x) => x * x);
        const memoizedSquare = F.memoize(square);

        const firstCallResult = memoizedSquare(4);
        const secondCallResult = memoizedSquare(4);

        expect(secondCallResult).toBe(firstCallResult);
        expect(square).toHaveBeenCalledTimes(1);
    });
});
