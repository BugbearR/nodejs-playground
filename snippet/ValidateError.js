export class ValidateError extends Error {
    constructor(msg, obj) {
        super(msg);
        this.obj = obj;
    }
}
