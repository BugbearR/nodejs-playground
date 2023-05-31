function convCodeToNum(charCode)
{
    if (charCode < 0x41)
    {
        if (charCode < 0x30)
        {
            switch (charCode)
            {
            case 0x2d: // '-'
                return 36;
            case 0x2e: // '.'
                return 37;
            case 0x20: // ' '
                return 38;
            case 0x24: // '$'
                return 39;
            case 0x2f: // '/'
                return 40;
            case 0x2b: // '+'
                return 41;
            case 0x25: // '%'
                return 42;
            default:
                return undefined;
            }
        }
        else if (charCode <= 0x39)
        {
            return charCode - 0x30;
        }
    }
    else if (charCode <= 0x5a)
    {
        return charCode - 0x41 + 10;
    }
    else
    {
        return undefined;
    }
}
