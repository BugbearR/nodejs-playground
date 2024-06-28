class CancellationToken {
    constructor() {
        this.isCancelled = false;
        this.callbacks = [];
    }

    cancel() {
        if (this.isCancelled) {
            return;
        }
        this.isCancelled = true;
        this.callbacks.forEach(callback => callback());
    }

    register(callback) {
        if (this.isCancelled) {
            callback();
        } else {
            this.callbacks.push(callback);
        }
    }
}

export default CancellationToken;
