import * as F from "../src";

describe("partial", () => {
    test("adds arguments partially firsly 1 then 2 to be equal 3", () => {
        let add = (a, b) => a + b;
        let addPartial = F.partial(add, 1);

        expect(addPartial(2)).toBe(3);
    });
});
