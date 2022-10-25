import { ValidateError } from "./ValidateError";

function isObject(o) {
    if (typeof o !== "object") return false;
    if (o === null) return false;
    if (Array.isArray(o)) return false;
    return true;
}

export function validateNumber(name, o) {
    if (typeof o !== "number") {
        throw new ValidateError(`${name} is not Number`, { name: name, value: o });
    }
}

export function validateString(name, o) {
    if (typeof o !== "string") {
        throw new ValidateError(`${name} is not String`, { name: name, value: o });
    }
}

export function validateArray(name, o) {
    if (!Array.isArray(o)) {
        throw new ValidateError(`${name} is not Array`, { name: name, value: o });
    }
}

export function validateObject(name, o) {
    if (!isObject(o)) {
        throw new ValidateError(`${name} is not Object`, { name: name, value: o });
    }
}

export function validateFunction(name, o) {
    if (typeof o !== "function") {
        throw new ValidateError(`${name} is not Function`, { name: name, value: o });
    }
}
