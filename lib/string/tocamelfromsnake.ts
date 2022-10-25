import { toCapitalize } from "./tocapitalize";

/**
 * snake_case to CamelCase
 * @param s snake_case
 * @param capitalizeFirst capitalize first word
 * @returns CamelCase
 */
export default function toCamelFromSnake(s: string, capitalizeFirst: boolean)
{
    const a = s.split("_");
    for (let i = ((capitalizeFirst) ? 0 : 1), len = a.length; i < len; i++)
    {
        a[i] = toCapitalize(a[i]);
    }
    return a.join("");
}
