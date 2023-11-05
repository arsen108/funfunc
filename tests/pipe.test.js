import * as F from "../src";

describe("pipe", () => {
    test("pipe with two functions, first one can have any arity", () => {
        let add = (a, b) => a + b;
        let pow2 = (x) => x * x;

        let addThenPower = F.pipe(add, pow2);
        let result = addThenPower(2, 3);

        expect(result).toBe(25);
    });
});
