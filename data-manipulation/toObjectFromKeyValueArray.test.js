import toObjectFromKeyValueArray from './toObjectFromKeyValueArray';

describe('toObjectFromKeyValueArray', () => {
    it('should convert an array of key-value pairs into an object', () => {
        const input = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
        const expectedOutput = { key1: 'value1', key2: 'value2', key3: 'value3' };

        expect(toObjectFromKeyValueArray(input)).toEqual(expectedOutput);
    });

    it('should return an empty object for an empty array', () => {
        const input = [];
        const expectedOutput = {};

        expect(toObjectFromKeyValueArray(input)).toEqual(expectedOutput);
    });

    it('should handle arrays with single element', () => {
        const input = [['key1', 'value1']];
        const expectedOutput = { key1: 'value1' };

        expect(toObjectFromKeyValueArray(input)).toEqual(expectedOutput);
    });
});