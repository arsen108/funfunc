var F = require("../src/index");

describe("flip", () => {
    test("flips the arguments of the divide function", () => {
        let divide = (a, b) => a / b;
        expect(divide(10, 5)).toBe(2);

        let flippedDivide = F.flip(divide);
        expect(flippedDivide(10, 5)).toBe(0.5);
    });
});
