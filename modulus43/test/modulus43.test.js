import { Modulus43 } from "../src/modulus43";

describe("decode test", () => {
    test("should correctly convert a single character to a number", () => {
        expect(Modulus43.decode("0")).toBe(0);
        expect(Modulus43.decode("9")).toBe(9);
        expect(Modulus43.decode("A")).toBe(10);
        expect(Modulus43.decode("Z")).toBe(35);
    });
    test.each([
        ["0", 0],
        ["9", 9],
        ["A", 10],
        ["Z", 35],
        ["-", 36],
        [".", 37],
        [" ", 38],
        ["$", 39],
        ["/", 40],
        ["+", 41],
        ["%", 42],
        ["?", -1]
    ])("should correctly convert %s to %d", (input, expected) => {
        expect(Modulus43.decode(input)).toBe(expected);
    });
});

describe("encode test", () => {
    test.each([
        ["0", 0],
        ["9", 9],
        ["A", 10],
        ["Z", 35],
        ["-", 36],
        [".", 37],
        [" ", 38],
        ["$", 39],
        ["/", 40],
        ["+", 41],
        ["%", 42],
        ["", -1],
        ["", 43]
    ])("should correctly convert to %s from %d", (expected, input) => {
        expect(Modulus43.encode(input)).toBe(expected);
    });
});

describe("calcCheckDigit test", () => {
    test.each([
        ["HELLO WORLD", "."],
        ["159AZ", "H"],
        ["0", "0"],
        ["9", "9"],
        ["A", "A"],
        ["Z", "Z"],
        ["-", "-"],
        ["%", "%"]
    ])("should correctly calculate the check digit for %s as %s", (input, expected) => {
        expect(Modulus43.calcCheckDigit(input)).toBe(expected);
    });
});
