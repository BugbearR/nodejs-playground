function parseYYYYMMDD(s) {
    if (!/\d{8}/.test(s)) {
        return null;
    }
    const year = parseInt(s.substring(0, 4), 10);
    const month = parseInt(s.substring(4, 6), 10);
    const dayOfMonth = parseInt(s.substring(6, 8), 10);
    const r = new Date(year, month - 1, day);
    if (r.getFullYear() != year
        || r.getMonth() != month - 1
        || r.getDate() != dayOfMonth) {
        return null;
    }
    return r;
}

function parseYYYYMMDDhhmm(s) {
    if (!/\d{12}/.test(s)) {
        return null;
    }
    const year = parseInt(s.substring(0, 4), 10);
    const month = parseInt(s.substring(4, 6), 10);
    const dayOfMonth = parseInt(s.substring(6, 8), 10);
    const hours = parseInt(s.substring(8, 10), 10);
    const minutes = parseInt(s.substring(10, 12), 10);
    const r = new Date(year, month - 1, day);
    if (r.getFullYear() != year
        || r.getMonth() != month - 1
        || r.getDate() != dayOfMonth
        || r.getHours() != hours
        || r.getMinutes() != minutes) {
        return null;
    }
    return r;
}

function parseYYYYMMDDhhmmss(s) {
    if (!/\d{14}/.test(s)) {
        return null;
    }
    const year = parseInt(s.substring(0, 4), 10);
    const month = parseInt(s.substring(4, 6), 10);
    const dayOfMonth = parseInt(s.substring(6, 8), 10);
    const hours = parseInt(s.substring(8, 10), 10);
    const minutes = parseInt(s.substring(10, 12), 10);
    const seconds = parseInt(s.substring(12, 14), 10);
    const r = new Date(year, month - 1, day, hours, minutes, seconds);
    if (r.getFullYear() != year
        || r.getMonth() != month - 1
        || r.getDate() != dayOfMonth
        || r.getHours() != hours
        || r.getMinutes() != minutes
        || r.getSeconds() != seconds) {
        return null;
    }
    return r;
}

function parseYYYYMMDDhhmmssfff(s) {
    if (!/\d{17}/.test(s)) {
        return null;
    }
    const year = parseInt(s.substring(0, 4), 10);
    const month = parseInt(s.substring(4, 6), 10);
    const dayOfMonth = parseInt(s.substring(6, 8), 10);
    const hours = parseInt(s.substring(8, 10), 10);
    const minutes = parseInt(s.substring(10, 12), 10);
    const seconds = parseInt(s.substring(12, 14), 10);
    const milliseconds = parseInt(s.substring(14, 17), 10);
    const r = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
    if (r.getFullYear() != year
        || r.getMonth() != month - 1
        || r.getDate() != dayOfMonth
        || r.getHours() != hours
        || r.getMinutes() != minutes
        || r.getSeconds() != seconds) {
        return null;
    }
    return r;
}
