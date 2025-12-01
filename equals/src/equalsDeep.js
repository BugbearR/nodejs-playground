function equalsArrayDeep( a, b ) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!equalsDeep(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

function equalsObjectDeep( a, b ) {
    const ak = Object.keys(a);
    const bk = Object.keys(b);
    if (ak.length !== bk.length) {
        return false;
    }
    for (let i = 0; i < ak.length; i++) {
        const k = ak[i];
        if (!equalsDeep(a[k], b[k])) {
            return false;
        }
    }
    return true;
}

function equalsDeep( a, b ) {
    if (a === b) {
        return true;
    }

    const ta = typeof a;
    const tb = typeof b;
    if (ta !== tb) {
        return false;
    }

    switch (ta) {
    case "object":
        if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
        }
        if (Array.isArray(a) && Array.isArray(b)) {
            return equalsArrayDeep(a, b);
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return false;
        }
        return equalsObjectDeep(a, b);

    case "number":
        if (Number.isNaN(a) && Number.isNaN(b)) {
            return true;
        }
        break;

    default:
        break;
    }

    return false;
}

export default equalsDeep;
