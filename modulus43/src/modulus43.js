const MODULUS43_CHAR_TABLE = "0123456789ABCDEFGHIJKLMNOPQRStUVWXYZ-. $/+%";

export class Modulus43
{
    static get MODULUS43_CHAR_TABLE()
    {
        return MODULUS43_CHAR_TABLE;
    }

    /**
     * encode modulus43
     * @param {string} n number
     * @returns character
     */
    static encode(n)
    {
        return MODULUS43_CHAR_TABLE.substring(n, n + 1);
    }

    /**
     * decode modulus43
     * @param {string} c character
     * @returns number (if )
     */
    static decode(c)
    {
        return MODULUS43_CHAR_TABLE.indexOf(c);
    }

    /**
     * Validate Code39 caracter string. (However do not check the check digit.)
     * @param {string} s code39 string
     * @returns {boolean} true if the string is a valid Code39 string, false otherwise
     */
    static isValidChars(s)
    {
        return Array.from(s).every((c) => {
            return this.decode(c) >= 0;
        });
    }

    /**
     * calculate check digit (modulus43)
     * @param {string} s code39 string (check digit is not included)
     * @returns check digit (modulus43)
     */
    static calcCheckDigit(s)
    {
        const sumCodes = Array.from(s).reduce((acc, c) => {
            return acc + this.decode(c);
        }, 0);
        const checkDigitNum = sumCodes % 43;
        return this.encode(checkDigitNum);
    }

    static splitCode39StringAndCheckDigit(s)
    {
        return {
            code: s.slice(0, -1),
            checkDigit: s.slice(-1)
        };
    }
}
