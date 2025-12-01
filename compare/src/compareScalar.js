import compareScalarSimple from "./compareScalarSimple";

function compareScalar( a, b ) {
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
    case "boolean":
    case "string":
    case "bigint":
        return compareScalarSimple(a, b);

    case "object":
        if (a instanceof Date && b instanceof Date) {
            return compareScalar(a.getTime(), b.getTime());
        }
        return 0;

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
        return compareScalarSimple(a, b);

    default:
        break;
    }

    return 0;
}

export default compareScalar;
