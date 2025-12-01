import compareScalar from "./compareScalar";
import compareScalarSimple from "./compareScalarSimple";

function compareArray(a, b) {
    const count = (a.length < b.length) ? a.length : b.length;
    for (let i = 0; i < count; i++) {
        const c = compareScalar(a[i], b[i]);
        if (c != 0) {
            return c;
        }
    }
    return compareScalarSimple(a.length, b.length);
}

export default compareArray;
