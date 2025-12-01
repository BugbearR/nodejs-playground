import compareObject from "./compareObject";

describe("compareObject", () => {
    test("key order should not affect result", () => {
        const a = { b: 2, a: 1 };
        const b = { a: 1, b: 2 };
        expect(compareObject(a, b)).toBe(0);
    });

    test("no deeply compares nested objects", () => {
        const n1 = { a: 1, b: { c: 3 } };
        const n2 = { a: 1, b: { c: 4 } };
        expect(compareObject(n1, n2)).toBe(0);
        expect(compareObject(n2, n1)).toBe(0);
    });

    test("different scalar values for same key", () => {
        expect(compareObject({ a: 1 }, { a: 2 })).toBeLessThan(0);
        expect(compareObject({ a: 2 }, { a: 1 })).toBeGreaterThan(0);
    });

    test("object with extra or missing keys (length-based behavior)", () => {
        const longer = { a: 1, b: 2, c: 3 };
        const shorter = { a: 1, b: 2 };

        // current implementation returns a negative result when left has extra key
        expect(compareObject(longer, shorter)).toBeLessThan(0);
        // when left is shorter it also returns a negative result (based on current behavior)
        expect(compareObject(shorter, longer)).toBeLessThan(0);
    });
});
