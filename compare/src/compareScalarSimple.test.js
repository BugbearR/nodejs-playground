import compareScalarSimple from './compareScalarSimple';

describe('compareScalarSimple', () => {
    test('numbers', () => {
        expect(compareScalarSimple(1, 2)).toBe(-1);
        expect(compareScalarSimple(2, 1)).toBe(1);
        expect(compareScalarSimple(5, 5)).toBe(0);
    });

    test('strings (lexicographic)', () => {
        expect(compareScalarSimple('a', 'b')).toBe(-1);
        expect(compareScalarSimple('b', 'a')).toBe(1);
        expect(compareScalarSimple('x', 'x')).toBe(0);
    });

    test('mixed numeric string and number (coercion)', () => {
        expect(compareScalarSimple('2', 10)).toBe(-1);
        expect(compareScalarSimple('10', 2)).toBe(1);
    });

    test('booleans', () => {
        expect(compareScalarSimple(false, true)).toBe(-1);
        expect(compareScalarSimple(true, false)).toBe(1);
        expect(compareScalarSimple(true, true)).toBe(0);
    });

    test('null, undefined and NaN behaviors', () => {
        // null coerces to 0
        expect(compareScalarSimple(null, 0)).toBe(0);
        expect(compareScalarSimple(null, 1)).toBe(-1);

        // undefined and NaN cause relational comparisons to be false, resulting in 0
        expect(compareScalarSimple(undefined, 1)).toBe(0);
        expect(compareScalarSimple(undefined, undefined)).toBe(0);
        expect(compareScalarSimple(NaN, NaN)).toBe(0);
        expect(compareScalarSimple(NaN, 1)).toBe(0);
    });

    test('objects that coerce to primitives via valueOf', () => {
        const a = { valueOf: () => 1 };
        const b = { valueOf: () => 2 };
        expect(compareScalarSimple(a, b)).toBe(-1);
        expect(compareScalarSimple(b, a)).toBe(1);
        expect(compareScalarSimple(a, { valueOf: () => 1 })).toBe(0);
    });
});
