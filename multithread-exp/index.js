// import process from "process";
const process = require("process");

class MyThread {
    constructor(number) {
        this.number = number;
    }

    run() {
        console.log(this.number);
        setTimeout(() => { this.run() }, 1000);
    }
}

setTimeout(() => { process.exit(0); }, 5000)
const threads = [];
for (let i = 0; i < 10; i++) {
    threads.push(new MyThread(i));
}
for (let i = 0; i < 10; i++) {
    threads[i].run();
}
