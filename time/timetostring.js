
function toYYYYMMDD(t) {
    return t.getFullYear().toString().padStart(4, '0')
        + (t.getMonth() + 1).toString().padStart(2, '0')
        + t.getDate().toString().padStart(2, '0');
}

function toYYYYMMDDhhmm(t) {
    return t.getFullYear().toString().padStart(4, '0')
        + (t.getMonth() + 1).toString().padStart(2, '0')
        + t.getDate().toString().padStart(2, '0')
        + t.getHours().toString().padStart(2, '0')
        + t.getMinutes().toString().padStart(2, '0');
}

function toYYYYMMDDhhmmss(t) {
    return t.getFullYear().toString().padStart(4, '0')
        + (t.getMonth() + 1).toString().padStart(2, '0')
        + t.getDate().toString().padStart(2, '0')
        + t.getHours().toString().padStart(2, '0')
        + t.getMinutes().toString().padStart(2, '0')
        + t.getSeconds().toString().padStart(2, '0');
}

function toYYYYMMDDhhmmssfff(t) {
    return t.getFullYear().toString().padStart(4, '0')
        + (t.getMonth() + 1).toString().padStart(2, '0')
        + t.getDate().toString().padStart(2, '0')
        + t.getHours().toString().padStart(2, '0')
        + t.getMinutes().toString().padStart(2, '0')
        + t.getSeconds().toString().padStart(2, '0')
        + t.getMilliseconds().toString().padStart(3, '0');
}

function toUTCYYYYMMDD(t) {
    return t.getFullYear().toString().padStart(4, '0')
        + (t.getMonth() + 1).toString().padStart(2, '0')
        + t.getDate().toString().padStart(2, '0');
}

function toUTCYYYYMMDDhhmm(t) {
    return t.getUTCFullYear().toString().padStart(4, '0')
        + (t.getUTCMonth() + 1).toString().padStart(2, '0')
        + t.getUTCDate().toString().padStart(2, '0')
        + t.getUTCHours().toString().padStart(2, '0')
        + t.getUTCMinutes().toString().padStart(2, '0');
}

function toUTCYYYYMMDDhhmmss(t) {
    return t.getUTCFullYear().toString().padStart(4, '0')
        + (t.getUTCMonth() + 1).toString().padStart(2, '0')
        + t.getUTCDate().toString().padStart(2, '0')
        + t.getUTCHours().toString().padStart(2, '0')
        + t.getUTCMinutes().toString().padStart(2, '0')
        + t.getUTCSeconds().toString().padStart(2, '0');
}

function toUTCYYYYMMDDhhmmssfff(t) {
    return t.getUTCFullYear().toString().padStart(4, '0')
        + (t.getUTCMonth() + 1).toString().padStart(2, '0')
        + t.getUTCDate().toString().padStart(2, '0')
        + t.getUTCHours().toString().padStart(2, '0')
        + t.getUTCMinutes().toString().padStart(2, '0')
        + t.getUTCSeconds().toString().padStart(2, '0')
        + t.getUTCMilliseconds().toString().padStart(3, '0');
}
