import * as Foo from "../esm/Foo";

describe("Foo test", () => {
    test("test hello", () => {
        expect(Foo.hello("test")).toBe("Hello test");
    });
});
