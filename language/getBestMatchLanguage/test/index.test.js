const getBestMatchLanguage = require("../index");

test('countMatchLanguageTagItem function', () => {
    expect(getBestMatchLanguage.countMatchLanguageTagItem("aa", "aa")).toBe(1);
    expect(getBestMatchLanguage.countMatchLanguageTagItem("aa-bb", "aa-cc")).toBe(1);
    expect(getBestMatchLanguage.countMatchLanguageTagItem("aa-bb", "aa-cc-bb")).toBe(2);
    expect(getBestMatchLanguage.countMatchLanguageTagItem("aa-cc-bb", "aa-bb")).toBe(2);
    expect(getBestMatchLanguage.countMatchLanguageTagItem("aa-cc-bb", "aa-dd-ee-bb")).toBe(2);
    expect(getBestMatchLanguage.countMatchLanguageTagItem("aa-cc-bb-ee-hh-gg", "aa-dd-ee-bb-ff-gg-hh")).toBe(3);
    expect(getBestMatchLanguage.countMatchLanguageTagItem("gg-bb-cc-dd-ee-aa", "gg-cc-ee-ff-aa")).toBe(4);
});

test('getBestMatchLanguage function', () => {
    expect(getBestMatchLanguage.getBestMatchLanguage(["aa"], ["aa"], "en")).toBe("aa");
    expect(getBestMatchLanguage.getBestMatchLanguage(["aa"], ["bb"], "en")).toBe("en");
    expect(getBestMatchLanguage.getBestMatchLanguage(["en-US", "en-GB"], ["en-GB", "en"], "xx")).toBe("en-GB");
    expect(getBestMatchLanguage.getBestMatchLanguage(["en-US", "en-GB"], ["ja-JP", "en"], "xx")).toBe("en-US");
    expect(getBestMatchLanguage.getBestMatchLanguage(["en-US", "ja-KS", "ja-JP"], ["ja-JP", "en"], "xx")).toBe("ja-JP");
    expect(getBestMatchLanguage.getBestMatchLanguage(["en-US", "ja-KS", "ja-JP"], ["ja", "en"], "xx")).toBe("ja-KS");
});
