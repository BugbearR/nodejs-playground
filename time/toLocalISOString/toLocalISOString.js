
function toLocalISOString( date ) {
    const utcTime = date.getTime();
    const localDate = new Date();
    const fullYear = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millis = date.getMilliseconds();

    localDate.setUTCFullYear( fullYear );
    localDate.setUTCMonth( month );
    localDate.setUTCDate( day );
    localDate.setUTCHours( hour );
    localDate.setUTCMinutes( minute );
    localDate.setUTCSeconds( second );
    localDate.setUTCMilliseconds( millis );
    const localTime = localDate.getTime();
    let diffTime = localTime - utcTime;
    let diffStr = undefined;
    if ( diffTime === 0 ) {
        return localDate.toISOString();
    }

    const isMinus = ( diffTime < 0 );
    if ( isMinus ) {
        diffTime = -diffTime;
    }
    const diffMinute = Math.floor( diffTime / 60000 );
    const diffMinutePart = ( diffMinute % 60 );
    const diffHourPart = ( diffMinute - diffMinutePart ) / 60;
    const signStr = ( isMinus ) ? "-" : "+";
    diffStr = `${signStr}${diffHourPart.toString().padStart( 2, "0" )}:${diffMinutePart.toString().padStart( 2, "0" )}`;
    const r = localDate.toISOString().slice( 0, -1 ) + diffStr;
    return r;
}

export default toLocalISOString;
