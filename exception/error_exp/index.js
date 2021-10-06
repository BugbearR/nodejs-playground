try {
    throw new Error("Hello, world!");
}
catch (e) {
    console.log(typeof e.message);
    console.log(e.message);
    console.log(typeof e.stack);
    console.log(e.stack);
}
