function doSomething() {
    console.log('Doing something...');
}

// exports is alias of module.exports
exports.doSomething1 = function () {
    console.log('Doing something 1 ...');
}

exports.doSomething2 = function () {
    console.log('Doing something 2 ...');
}

exports.MY_CONSTANT = 100;
