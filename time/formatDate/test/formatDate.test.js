import formatDate from "../formatDate.js";

describe("Test isFileModified", () => {
    test("", () => {
        expect(formatDate(new Date(2012,9,23,12,34,56), "YYYY/MM/DD hh:mm:ss")).toBe("2012/10/23 12:34:56");
        expect(formatDate(new Date(2012,9,23,12,34,56).setMilliseconds(789), "YYYY/MM/DD hh:mm:ss.fff")).toBe("2012/10/23 12:34:56.789");
        expect(formatDate(new Date(2012,0,1,0,0,0), "YYYY/MM/DD hh:mm:ss")).toBe("2012/01/01 00:00:00");
        expect(formatDate(new Date(2012,0,1,0,0,0), "YYYY/MM/DD hh:mm:ss.fff")).toBe("2012/01/01 00:00:00.000");
    } );
});
