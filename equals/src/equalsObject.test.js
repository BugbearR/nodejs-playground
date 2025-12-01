import equalsObject from './equalsObject';

describe('equalsObject', () => {
    test('returns true for objects with same keys and values', () => {
        expect(equalsObject({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    });

    test('returns true for the same reference', () => {
        const obj = { x: 42 };
        expect(equalsObject(obj, obj)).toBe(true);
    });

    test('returns true when keys are same but order differs', () => {
        expect(equalsObject({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
    });

    test('returns false when values differ for the same key', () => {
        expect(equalsObject({ a: 1 }, { a: 2 })).toBe(false);
    });

    test('returns false when the second object has extra keys', () => {
        expect(equalsObject({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    });

    test('throws when given null or undefined inputs', () => {
        expect(() => equalsObject(null, {})).toThrow();
        expect(() => equalsObject({}, null)).toThrow();
        expect(() => equalsObject(undefined, {})).toThrow();
        expect(() => equalsObject({}, undefined)).toThrow();
    });
});
