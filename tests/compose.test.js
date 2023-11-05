var F = require("../src/index");

describe("compose", () => {
    test("should correctly compose a binary function with a unary function", () => {
        let add = (a, b) => a + b;
        let pow2 = (x) => x * x;

        let addThenPower = F.compose(pow2, add);
        let result = addThenPower(2, 3);

        expect(result).toBe(25);
    });
});
