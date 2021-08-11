function findPlusEpsilon(n) {
    let eps = 1;
    let preEps;
    while (n + eps == n) {
        // console.log(eps);
        if (eps === Infinity) {
            return Infinity;
        }
        eps *= 2;
    }
    if (eps === Infinity) {
        return Infinity;
    }
    while (n + eps != n) {
        // console.log(eps);
        if (eps === 0) {
            return 0;
        }
        preEps = eps
        eps /= 2;
    }
    return preEps;
}

function findMinusEpsilon(n) {
    let eps = 1;
    let preEps;
    while (n - eps == n) {
        // console.log(eps);
        if (eps === Infinity) {
            return Infinity;
        }
        eps *= 2;
    }
    if (eps === Infinity) {
        return Infinity;
    }
    while (n - eps != n) {
        // console.log(eps);
        if (eps === 0) {
            return 0;
        }
        preEps = eps
        eps /= 2;
    }
    return preEps;
}

const n = Number.parseFloat(process.argv[2]);
const plusEpsilon = findPlusEpsilon(n);
const minusEpsilon = findMinusEpsilon(n);
console.log({
    plusEpsilon: plusEpsilon,
    minusEpsilon: minusEpsilon,
    n_plusEpsilon: n + plusEpsilon,
    n_minusEpsilon: n - plusEpsilon,
});
