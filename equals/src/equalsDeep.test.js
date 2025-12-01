import equalsDeep from "./equalsDeep";

describe("equalsDeep", () => {
    test("primitives: equal and not equal", () => {
        expect(equalsDeep(1, 1)).toBe(true);
        expect(equalsDeep(1, 2)).toBe(false);
        expect(equalsDeep("a", "a")).toBe(true);
        expect(equalsDeep(true, false)).toBe(false);
    });

    test("NaN compares equal to NaN", () => {
        expect(equalsDeep(NaN, NaN)).toBe(true);
    });

    test("undefined and null equality", () => {
        expect(equalsDeep(undefined, undefined)).toBe(true);
        expect(equalsDeep(null, null)).toBe(true);
    });

    test("different types are not equal", () => {
        expect(equalsDeep(1, "1")).toBe(false);
        expect(equalsDeep([], {})).toBe(false);
    });

    test("arrays: shallow and nested", () => {
        expect(equalsDeep([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(equalsDeep([1, [2, 3]], [1, [2, 3]])).toBe(true);
        expect(equalsDeep([1, 2], [1, 2, 3])).toBe(false);
        expect(equalsDeep([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    test("objects: shallow and nested", () => {
        expect(equalsDeep({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
        expect(equalsDeep({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true);
        expect(equalsDeep({ a: 1 }, { a: 2 })).toBe(false);
        expect(equalsDeep({ a: 1 }, { b: 1 })).toBe(false);
    });

    test("objects with same keys in different insertion order", () => {
        const o1 = {};
        o1.a = 1;
        o1.b = 2;
        const o2 = {};
        o2.b = 2;
        o2.a = 1;
        expect(equalsDeep(o1, o2)).toBe(true);
    });

    test("dates compare by time value", () => {
        const d1 = new Date(2020, 1, 1);
        const d2 = new Date(2020, 1, 1);
        const d3 = new Date(2021, 1, 1);
        expect(equalsDeep(d1, d2)).toBe(true);
        expect(equalsDeep(d1, d3)).toBe(false);
    });

    test("functions: same reference vs different references", () => {
        const fn = () => 1;
        expect(equalsDeep(fn, fn)).toBe(true);
        expect(equalsDeep(() => 1, () => 1)).toBe(false);
    });

    test("object with undefined property vs missing property", () => {
        expect(equalsDeep({ a: undefined }, {})).toBe(false);
    });

    test("comparing null to a non-null object throws", () => {
        expect(() => equalsDeep(null, {})).toThrow(TypeError);
        expect(() => equalsDeep({}, null)).toThrow(TypeError);
    });
});
