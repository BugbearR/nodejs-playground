import * as Foo from "../src/Foo";

describe("Foo test", () => {
    test("test hello", () => {
        expect(Foo.hello("test")).toBe("Hello test");
    });
});
