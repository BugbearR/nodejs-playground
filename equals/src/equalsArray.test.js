import equalsArray from './equalsArray';

describe('equalsArray', () => {
    test('returns true for two empty arrays', () => {
        expect(equalsArray([], [])).toBe(true);
    });

    test('returns false for arrays with different lengths', () => {
        expect(equalsArray([1, 2], [1, 2, 3])).toBe(false);
    });

    test('returns false for arrays with same length but different values', () => {
        expect(equalsArray(['a'], ['b'])).toBe(false);
        expect(equalsArray(['x', 'a'], ['x', 'b'])).toBe(false);
        expect(equalsArray([2], [3])).toBe(false);
        expect(equalsArray([1, 2], [1, 3])).toBe(false);
    });

    test('handles sparse arrays (same length) as equal', () => {
        const a = new Array(4); // sparse length 4
        const b = [undefined, undefined, undefined, undefined];
        expect(equalsArray(a, b)).toBe(true);
    });

    test('throws when passed non-array-like values', () => {
        expect(() => equalsArray([], null)).toThrow();
        expect(() => equalsArray(undefined, [])).toThrow();
    });
});
