// JavaScript has separate memory areas for each process and only operates synchronously, so this caching method is acceptable.
let cacheDateTime = undefined;
let cacheDateTimeStr = undefined;
let cacheTz = undefined;
let cacheTzStr = undefined;

/**
 * Converts a date to an ISO8601 formatted string in the system's local time
 * @param {Date} date The date
 */
function toLocalISOString( date ) {
    // In most cases, it's the same second, so reuse if possible
    const curTime = date.getTime();
    if ( ! cacheDateTime || curTime - cacheDateTime >= 1000 ) {
        cacheDateTime = curTime - curTime % 1000;
        const year = ( date.getFullYear() ).toString();
        const month = ( date.getMonth() + 1 ).toString().padStart( 2, "0" );
        const day = date.getDate().toString().padStart( 2, "0" );
        const hour = date.getHours().toString().padStart( 2, "0" );
        const min = date.getMinutes().toString().padStart( 2, "0" );
        const sec = date.getSeconds().toString().padStart( 2, "0" );
        cacheDateTimeStr = `${year}-${month}-${day}T${hour}:${min}:${sec}`;

        // It usually only moves once. It moves when the time difference changes due to daylight saving time.
        let tz = date.getTimezoneOffset();
        if ( cacheTz !== tz ) {
            cacheTz = tz;
            let sign = undefined;
            if ( tz === 0 ) {
                cacheTzStr = "Z";
            } else {
                // Note that the sign becomes the opposite of the ISO8601 notation.
                if ( tz < 0 ) {
                    sign = "+";
                    tz = -tz;
                } else {
                    sign = "-";
                }
                const tzMin = tz % 60;
                const tzHour = ( tz - tzMin ) / 60;
                const tzMinStr = tzMin.toString().padStart( 2, "0" );
                const tzHourStr = tzHour.toString().padStart( 2, "0" );
                cacheTzStr = `${sign}${tzHourStr}:${tzMinStr}`;
            }
        }
    }

    const millisec = date.getMilliseconds().toString().padStart( 3, "0" );
    return `${cacheDateTimeStr}.${millisec}${cacheTzStr}`;
}

export default toLocalISOString;
