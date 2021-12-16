const re = / +at (.*) \((.*):([0-9]+):([0-9]+)\)/;

function toStructuredStack(stackStr)
{
    const lines = stackStr.split("\n");
    const stack = [];
    for (let i = 1, iEnd = lines.length; i < iEnd; i++)
    {
        const line = lines[i];
        const matches = re.exec(line);
        if (matches)
        {
            stack.push(
                {
                    func: matches[1],
                    file: matches[2],
                    line: matches[3],
                    column: matches[4]
                }
            );
        }
        else
        {
            stack.push(
                {
                    str: line
                }
            );
        }
    }
    return stack;
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
