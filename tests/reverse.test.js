import * as F from "../src";

describe("reverse", () => {
    test("should reverse the provided array", () => {
        const arr = [1, 2, 3];

        const result = F.reverse(arr);

        expect(result).toStrictEqual([3, 2, 1]);
    });
});
