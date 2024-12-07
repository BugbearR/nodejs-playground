async function f() {
	return new Promise((resolve) => {
		setTimeout(
			() => {resolve("Hello, world!");},
			1000
        );
    });
}

console.log("before");
const msg = await f();
console.log(msg);
console.log("after");
