import equalsScalar from "./equalsScalar";

function equalsArray( a, b ) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!equalsScalar(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

export default equalsArray;
