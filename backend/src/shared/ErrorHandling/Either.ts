interface IEither {
    isException(): boolean;
    isSucess(): boolean;
};

export class Exception<L,R> implements IEither {

    constructor(
        readonly exception: L
    ) {};
    
    public isException(): this is Exception<L,R> {
        return true;
    };

    public isSucess(): this is Sucess<L,R> {
        return false;
    };

};

export class Sucess<L,R> implements IEither {

    constructor(
        readonly sucess: R
    ) {};  

    public isException(): this is Exception<L,R> {
        return false;
    };

    public isSucess(): this is Sucess<L,R> {
        return true;
    };

};

export type Either<L,R> = Exception<L,R> | Sucess<L,R>;

const error = <L,R>(l: L): Either<L,R> => {
    return new Exception(l);
};

const sucess = <L,R>(r: R): Either<L,R> => {
    return new Sucess(r);
};

export { error, sucess };