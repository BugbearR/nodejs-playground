import compareArrayDeep from './compareArray';

describe('compareArrayDeep', () => {
    it('returns 0 for two empty arrays', () => {
        expect(compareArrayDeep([], [])).toEqual(0);
    });

    it('returns 0 for identical numeric arrays', () => {
        expect(compareArrayDeep([1, 2, 3], [1, 2, 3])).toEqual(0);
    });

    it('returns a negative value when first differing element of a is less than b', () => {
        expect(compareArrayDeep([1, 2, 3], [2, 1, 0])).toBeLessThan(0);
    });

    it('returns a positive value when first differing element of a is greater than b', () => {
        expect(compareArrayDeep([1, 4, 3], [1, 2, 9])).toBeGreaterThan(0);
    });

    it('shorter array that is a prefix of the other is considered less', () => {
        expect(compareArrayDeep([1, 2], [1, 2, 3])).toBeLessThan(0);
    });

    it('longer array that has the shorter as a prefix is considered greater', () => {
        expect(compareArrayDeep([1, 2, 3], [1, 2])).toBeGreaterThan(0);
    });

    it('compares string elements lexicographically via sign of result', () => {
        expect(compareArrayDeep(['a', 'b'], ['a', 'c'])).toBeLessThan(0);
        expect(compareArrayDeep(['a', 'z'], ['a', 'a'])).toBeGreaterThan(0);
    });
});
