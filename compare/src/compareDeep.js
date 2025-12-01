import compareScalar from "./compareScalar";

function compareArrayDeep(a, b) {
    const count = (a.length < b.length) ? a.length : b.length;
    for (let i = 0; i < count; i++) {
        const c = compareDeep(a[i], b[i]);
        if (c != 0) {
            return c;
        }
    }
    return compareScalar(a.length, b.length);
}

function compareObjectDeep( a, b ) {
    const ak = Object.keys(a).sort();
    const bk = Object.keys(b).sort();
    const count = (ak.length < bk.length) ? ak.length : bk.length;
    for (let i = 0; i < ak.length; i++) {
        const k = ak[i];
        const c = compareDeep(a[k], b[k]);
        if (c != 0) {
            return c;
        }
    }

    return compareScalar(ak.length, bk.length);
}

function compareDeep( a, b ) {
    if (a === b) {
        return 0;
    }

    if (a === undefined) {
        return 1;
    }
    if (b === undefined) {
        return -1;
    }

    if (a === null) {
        return 1;
    }
    if (b === null) {
        return -1;
    }

    const ta = typeof a;
    const tb = typeof b;
    if (ta !== tb) {
        throw new Error(`Unmatch type. typeof a:${ta} typeof b:${tb}`);
    }

    switch (ta) {
    case "object":
        if (a instanceof Date && b instanceof Date) {
            return compareDeep(a.getTime(), b.getTime());
        }
        if (Array.isArray(a) && Array.isArray(b)) {
            return compareArrayDeep(a, b);
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            throw new Error(`Unmatch type. typeof a:${ta} b:${tb}`);
        }
        return compareObjectDeep(a, b);

    case "number":
        const anan = Number.isNaN(a);
        const bnan = Number.isNaN(b);
        if (anan && bnan) {
            return 0;
        }
        if (anan) {
            return 1;
        }
        if (bnan) {
            return -1;
        }
        return compareScalar(a, b);

    default:
        break;
    }

    return 0;
}

export default compareDeep;
