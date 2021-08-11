import { toCapitalize } from "./tocapitalize";

export default function toCamelFromSnake(s: string, capitalizeStart: boolean)
{
    const a = s.split("_");
    for (let i = ((capitalizeStart) ? 0 : 1), len = a.length; i < len; i++)
    {
        a[i] = toCapitalize(a[i]);
    }
    return a.join("");
}
