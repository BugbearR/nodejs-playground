/**
 * Capitalize string with locale
 * @param s string
 * @param locale locale
 * @returns Capitalized string
 */
export function toLocaleCapitalize(s: string, locale: string | string[] )
{
    return s.substring(0, 1).toLocaleUpperCase(locale) + s.substring(1);
}
