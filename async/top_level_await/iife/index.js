async function f() {
	return new Promise((resolve) => {
		setTimeout(
			() => {resolve("Hello, world!");},
			1000
        );
    });
}

(async () => {
    console.log("before");
    console.log(await f());
    console.log("after");
})();
