class ParametersSucess<T> {

    constructor( 
        private _message: string,
        private _value: T
    ) {};

    get message() { return this._message };
    get value() { return this._value };

};

export { ParametersSucess };