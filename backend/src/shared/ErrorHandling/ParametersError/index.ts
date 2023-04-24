import { code } from "../../interfaces/StatusCode";

class ParametersError extends Error {

    private _message: string;
    private _statusCode: code;

    constructor( message: string, statusCode: code ) {
    
        super(message);
        
        this._message = message;
        this._statusCode = statusCode;

    };

    get message() { return this._message };
    get statusCode() { return this._statusCode };

};

export { ParametersError };