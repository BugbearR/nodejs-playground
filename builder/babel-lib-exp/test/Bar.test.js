import * as Bar from "../esm/Bar";

describe("Bar test", () => {
    test("test hello", () => {
        expect(Bar.hello("test")).toBe("Test test");
    });
});
