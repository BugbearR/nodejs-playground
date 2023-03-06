export default function formatDate(date, format) {
    return format.replace(/YYYY|MM|DD|hh|mm|ss|fff/g, (s) => {
        switch (s) {
        case "YYYY":
            return date.getFullYear().toString();

        case "MM":
            return (date.getMonth() + 1).toString().padStart(2, "0");

        case "DD":
            return date.getDate().toString().padStart(2, "0");

        case "hh":
            return date.getHours().toString().padStart(2, "0");

        case "mm":
            return date.getMinutes().toString().padStart(2, "0");

        case "ss":
            return date.getSeconds().toString().padStart(2, "0");

        case "fff":
            return date.getMilliSeconds().toString().padStart(3, "0");

        default:
            throw new Error(`unknown replacement. ${s}`);
        }
    });
}
