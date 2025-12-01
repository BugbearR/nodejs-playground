function equalsScalar( a, b ) {
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
        break;

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

export default equalsScalar;
