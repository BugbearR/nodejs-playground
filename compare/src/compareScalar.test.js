import compareScalar from "./compareScalar.js";

describe("compareScalar", () => {
    test("numeric comparisons", () => {
        expect(compareScalar(1, 2)).toBe(-1);
        expect(compareScalar(2, 1)).toBe(1);
        expect(compareScalar(5, 5)).toBe(0);
        expect(compareScalar(0, -0)).toBe(0);
    });

    test("floats and infinities", () => {
        expect(compareScalar(1.5, 1.6)).toBe(-1);
        expect(compareScalar(Infinity, 1e308)).toBe(1);
        expect(compareScalar(-Infinity, -1e308)).toBe(-1);
    });

    test("string comparisons and coercion", () => {
        expect(compareScalar("a", "b")).toBe(-1);
        expect(compareScalar("b", "a")).toBe(1);
        expect(() => compareScalar("2", 2)).toThrow();
        expect(() => compareScalar("10", 2)).toThrow();
    });

    test("boolean, null and undefined behavior", () => {
        expect(compareScalar(true, true)).toBe(0);
        expect(compareScalar(false, false)).toBe(0);
        expect(compareScalar(true, false)).toBeGreaterThan(0);
        expect(compareScalar(false, true)).toBeLessThan(0);
        expect(compareScalar(null, null)).toBe(0);
        expect(compareScalar(null, 1)).toBeGreaterThan(0);
        expect(compareScalar(null, 0)).toBeGreaterThan(0);
        expect(compareScalar(1, null)).toBeLessThan(0);
        expect(compareScalar(0, null)).toBeLessThan(0);
        expect(compareScalar(undefined, null)).toBeGreaterThan(0);
        expect(compareScalar(null, undefined)).toBeLessThan(0);
        expect(compareScalar(undefined, 0)).toBeGreaterThan(0);
        expect(compareScalar(undefined, undefined)).toBe(0);
    });

    test("NaN behavior", () => {
        expect(compareScalar(NaN, NaN)).toBe(0);
        expect(compareScalar(NaN, 1)).toBeGreaterThan(0);
        expect(compareScalar(1, NaN)).toBeLessThan(0);
    });
});
