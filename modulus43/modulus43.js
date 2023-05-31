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
     * @returns number
     */
    static decode(c)
    {
        return MODULUS43_CHAR_TABLE.indexOf(c);
    }

    /**
     * validate code39 string
     * @param {string} s code39 string
     * @returns {boolean} true if the string is a valid Code39 string, false otherwise
     */
    static isValid(s)
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
}
