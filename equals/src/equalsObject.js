import equalsScalar from "./equalsScalar";

function equalsObject( a, b ) {
    const ak = Object.keys(a);
    const bk = Object.keys(b);
    if (ak.length !== bk.length) {
        return false;
    }
    for (let i = 0; i < ak.length; i++) {
        const k = ak[i];
        if (!equalsScalar(a[k], b[k])) {
            return false;
        }
    }
    return true;
}

export default equalsObject;
