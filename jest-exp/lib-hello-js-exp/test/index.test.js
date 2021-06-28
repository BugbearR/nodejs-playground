import Hello from "../src/index.js"

describe("Hello, jest!", () => {
    test("Test jest run", () => {
        expect(1 + 2).toBe(3);
    });
});

describe("Sample test", () => {
    test("Hello(default)", () => {
        const hello = new Hello();
        expect(hello.getHello("Alice")).toBe("Hello, Alice");
    })

    test("こんにちは", () => {
        const hello = new Hello("こんにちは");
        expect(hello.getHello("Alice")).toBe("こんにちは, Alice");
    })
});
