import * as F from "../src";

describe("compose", () => {
    test("copmose with two functions, first one can have any arity", () => {
        let add = (a, b) => a + b;
        let pow2 = (x) => x * x;

        let addThenPower = F.compose(pow2, add);
        let result = addThenPower(2, 3);

        expect(result).toBe(25);
    });
});
