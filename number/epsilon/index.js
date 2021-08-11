function findPlusEpsilon(n) {
    let eps = 1;
    let preEps;
    while (n + eps == n) {
        eps *= 2;
    }
    while (n + eps != n) {
        preEps = eps
        eps /= 2;
    }
    return preEps;
}

function findMinusEpsilon(n) {
    let eps = 1;
    let preEps;
    while (n - eps == n) {
        eps *= 2;
    }
    while (n - eps != n) {
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
