/**
 * Capitalize string
 * @param s string
 * @returns capitalized string
 */
export function toCapitalize(s: string)
{
    return s.substring(0, 1).toUpperCase() + s.substring(1);
}
