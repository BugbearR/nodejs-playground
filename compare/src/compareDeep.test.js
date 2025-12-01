import compareDeep from "./compareDeep";

describe("compareDeep", () => {
    test("primitive equality and booleans", () => {
        expect(compareDeep(1, 1)).toBe(0);
        expect(compareDeep("a", "a")).toBe(0);
        // booleans are not specially handled and non-equal booleans fall through to 0
        expect(compareDeep(true, false)).toBe(0);
    });

    test("undefined and null handling", () => {
        expect(compareDeep(undefined, undefined)).toBe(0);
        expect(compareDeep(undefined, 0)).toBeGreaterThan(0);
        expect(compareDeep(0, undefined)).toBeLessThan(0);

        expect(compareDeep(null, 0)).toBeGreaterThan(0);
        expect(compareDeep(0, null)).toBeLessThan(0);
        expect(compareDeep(null, undefined)).toBeLessThan(0);
    });

    test("number comparisons and NaN handling", () => {
        expect(compareDeep(2, 3)).toBeLessThan(0);
        expect(compareDeep(5, 2)).toBeGreaterThan(0);

        expect(compareDeep(NaN, NaN)).toBe(0);
        expect(compareDeep(NaN, 5)).toBeGreaterThan(0);
        expect(compareDeep(5, NaN)).toBeLessThan(0);
    });

    test("array deep comparisons and lengths", () => {
        expect(compareDeep([1, 2], [1, 3])).toBeLessThan(0);
        expect(compareDeep([1, 2], [1, 2, 3])).toBeLessThan(0);
        expect(compareDeep([1, 2, 4], [1, 2, 3])).toBeGreaterThan(0);
    });

    test("Date comparisons", () => {
        const d1 = new Date(2020, 0, 1);
        const d2 = new Date(2020, 0, 2);
        expect(compareDeep(d1, d2)).toBeLessThan(0);
        expect(compareDeep(d1, new Date(d1.getTime()))).toBe(0);
    });

    test("object deep comparisons, key order and nested", () => {
        const a = { b: 2, a: 1 };
        const b = { a: 1, b: 2 };
        expect(compareDeep(a, b)).toBe(0); // key order should not affect result

        const n1 = { a: 1, b: { c: 3 } };
        const n2 = { a: 1, b: { c: 4 } };
        expect(compareDeep(n1, n2)).toBeLessThan(0);
    });

    test("object with extra/missing keys", () => {
        const longer = { a: 1, b: 2, c: 3 };
        const shorter = { a: 1, b: 2 };
        // current implementation returns a negative result when left has extra key
        expect(compareDeep(longer, shorter)).toBeLessThan(0);
        // when left is shorter it also returns a negative result (based on length comparison)
        expect(compareDeep(shorter, longer)).toBeLessThan(0);
    });

    test("type mismatches throw", () => {
        expect(() => compareDeep(1, "1")).toThrow(/Unmatch type/);
        expect(() => compareDeep([], {})).toThrow(/Unmatch type/);
    });
});
