const re = / +at (.*) \((.*):([0-9]+):([0-9]+)\)/;

function toStructuredStack(stackStr)
{
    return stackStr
        .split("\n")
        .flatMap((line) => {
            const matches = / +at (.*) \((.*):([0-9]+):([0-9]+)\)/.exec(line);
            if (!matches) {
                return [];
            }
            if (/^node:internal/.test(matches[2])) {
                return [];
            }
            return {
                func: matches[1],
                file: matches[2],
                line: matches[3],
                column: matches[4]
            }
        });
}

function nest2() {
    const obj = {};
    Error.captureStackTrace(obj);
    console.log(obj.stack);
    console.log(toStructuredStack(obj.stack));
}

function nest1() {
    const obj = {};
    Error.captureStackTrace(obj);
    console.log(obj.stack);
    console.log(toStructuredStack(obj.stack));
    nest2();
}

nest1();
const obj = {};
Error.captureStackTrace(obj);
console.log(typeof obj.stack);
console.log(obj.stack);
console.log(toStructuredStack(obj.stack));

setTimeout( nest1, 2000 );
