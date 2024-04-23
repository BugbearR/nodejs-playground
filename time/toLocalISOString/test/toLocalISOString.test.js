import toLocalISOString from "../toLocalISOString.js";

describe( "Test toLocalISOString", () => {

    test( "Test by Japanese historical DST", () => {
        const currentLocale = Intl.DateTimeFormat().resolvedOptions().locale;
        if ( currentLocale !== "ja-JP" ) {
            test.skip();
        }

        expect( toLocalISOString( new Date( "1948-05-01T23:59:59+09:00" ) ) ).toStrictEqual( "1948-05-01T23:59:59.000+09:00" );
        expect( toLocalISOString( new Date( "1948-05-02T01:00:00+10:00" ) ) ).toStrictEqual( "1948-05-02T01:00:00.000+10:00" );
        expect( toLocalISOString( new Date( "1948-09-12T00:59:59+10:00" ) ) ).toStrictEqual( "1948-09-12T00:59:59.000+10:00" );
        expect( toLocalISOString( new Date( "1948-09-12T00:00:00+09:00" ) ) ).toStrictEqual( "1948-09-12T00:00:00.000+09:00" );
        expect( toLocalISOString( new Date( "1949-04-02T23:59:59+09:00" ) ) ).toStrictEqual( "1949-04-02T23:59:59.000+09:00" );
        expect( toLocalISOString( new Date( "1949-04-03T01:00:00+10:00" ) ) ).toStrictEqual( "1949-04-03T01:00:00.000+10:00" );
        expect( toLocalISOString( new Date( "1949-09-11T00:59:59+10:00" ) ) ).toStrictEqual( "1949-09-11T00:59:59.000+10:00" );
        expect( toLocalISOString( new Date( "1949-09-11T00:00:00+09:00" ) ) ).toStrictEqual( "1949-09-11T00:00:00.000+09:00" );
        expect( toLocalISOString( new Date( "1950-05-06T23:59:59+09:00" ) ) ).toStrictEqual( "1950-05-06T23:59:59.000+09:00" );
        expect( toLocalISOString( new Date( "1950-05-07T01:00:00+10:00" ) ) ).toStrictEqual( "1950-05-07T01:00:00.000+10:00" );
        expect( toLocalISOString( new Date( "1950-09-10T00:59:59+10:00" ) ) ).toStrictEqual( "1950-09-10T00:59:59.000+10:00" );
        expect( toLocalISOString( new Date( "1950-09-10T00:00:00+09:00" ) ) ).toStrictEqual( "1950-09-10T00:00:00.000+09:00" );
    } );
} );
