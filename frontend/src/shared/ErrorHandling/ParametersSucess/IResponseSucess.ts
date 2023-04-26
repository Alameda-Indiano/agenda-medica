export interface IResponseSucess<T> {
    message: string;
    jwt?: string;
    value: T
};