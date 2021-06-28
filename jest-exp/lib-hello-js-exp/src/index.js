class Hello {
    constructor(hello = "Hello") {
        this.hello = hello;
    }

    getHello(name) {
        return `${this.hello}, ${name}`;
    }
}

export default Hello;
