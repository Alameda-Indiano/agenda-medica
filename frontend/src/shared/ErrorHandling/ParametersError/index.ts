class ParametersError extends Error {

    private _message: string;

    constructor( message: string ) {
    
        super(message);
        
        this._message = message;

    };

    get message() { return this._message };

};

export { ParametersError };