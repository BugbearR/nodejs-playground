// Nothing happens.
try {
    console.log("clearTimeout(0)");
    console.log(clearTimeout(0));
    console.log("clearTimeout(null)");
    console.log(clearTimeout(null));
    console.log("clearTimeout(undefined)");
    console.log(clearTimeout(undefined));
} catch (e) {
    console.log(e);
}
