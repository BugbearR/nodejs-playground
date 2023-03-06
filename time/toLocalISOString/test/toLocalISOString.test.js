import toLocalISOString from "../toLocalISOString.js";

describe("Test toLocalISOString", () => {
    test("test1", () => {
        const curDate = new Date();
        const localTimeStr = toLocalISOString(curDate);
        console.log(localTimeStr)
        expect(new Date(localTimeStr)).toStrictEqual(curDate);
    } );
});
