import * as F from "../src";

describe("curry", () => {
    test("adds arguments 1 and 2 in an unary way and equals to 3", () => {
        let add = (a, b) => a + b;
        let addCurry = F.curry(add);

        expect(addCurry(1)(2)).toBe(3);
    });
});
