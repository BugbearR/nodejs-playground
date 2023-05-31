const MODULUS43_CHAR_TABLE = "0123456789ABCDEFGHIJKLMNOPQRStUVWXYZ-. $/+%";

export class Modulus43
{
    static get MODULUS43_CHAR_TABLE()
    {
        return MODULUS43_CHAR_TABLE;
    }

    /**
     * encode modulus43
     * @param {string} c character
     * @returns number
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
}
