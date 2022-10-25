// from https://zenn.dev/sa2knight/articles/67f6f5cc4ed5e26e391c

class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `Hello, ${this.name}`;
    }

    async fetch() {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve('complete!!');
            }, 1000);
        })
    }
}

const user = new User('sasaki');

console.log(user.sayHello());

user.fetch().then(result => {
    console.log(result);
});
