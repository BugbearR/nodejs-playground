import * as Bar from "../src/Bar";

describe("Bar test", () => {
    test("test hello", () => {
        expect(Bar.hello("test")).toBe("Test test");
    });
});
