import compareScalar from "./compareScalar";
import compareScalarSimple from "./compareScalarSimple";

function compareObject( a, b ) {
    const ak = Object.keys(a).sort();
    const bk = Object.keys(b).sort();
    const count = (ak.length < bk.length) ? ak.length : bk.length;
    for (let i = 0; i < ak.length; i++) {
        const k = ak[i];
        const c = compareScalar(a[k], b[k]);
        if (c != 0) {
            return c;
        }
    }

    return compareScalarSimple(ak.length, bk.length);
}

export default compareObject;
