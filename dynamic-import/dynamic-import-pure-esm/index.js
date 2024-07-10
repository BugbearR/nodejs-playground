
function main() {
    // Error
    // import("./cjs/sample_function.js").then((module) => {
    //     module.hello();
    // } );

    import("./cjs/sample_function.cjs").then((module) => {
        module.hello();
    } );

    import("./esm/sample_function.mjs").then((module) => {
        module.hello();
    } );

    import("./esm/sample_function.js").then((module) => {
        module.hello();
    } );
}

(() => {
    main();
})();
