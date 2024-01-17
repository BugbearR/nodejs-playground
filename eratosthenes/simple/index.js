
function main() {
    const n = Number(process.argv[2]) || 100;
    const a = Array(n + 1).fill(true);
    a[0] = a[1] = false;
    let p = 2;
    while (p <= n) {
        console.log(p);
        // mark non-prime
        for (let i = p * 2; i <= n; i += p) {
            a[i] = false;
        }
        // console.log(a);
        // skip non-prime
        while (++p <= n && !a[p]) {
        }
    }
}

main();
