import { code } from "../interfaces/StatusCode";

interface IResponseSucess<T> {
    message: string;
    statusCode: code;
    value: T
};

export { IResponseSucess };