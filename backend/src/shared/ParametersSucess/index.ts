import { code } from "../interfaces/StatusCode";

class ParametersSucess<T> {

    constructor( 
        private _message: string,
        private _statusCode: code,
        private _value: T
    ) {};

    get message() { return this._message };
    get statusCode() { return this._statusCode };
    get value() { return this._value };

};

export { ParametersSucess };