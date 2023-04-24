import { code } from "../../interfaces/StatusCode";

interface IResponseSucess<T> {
    message: string;
    statusCode: code;
    jwt?: string;
    value: T
};

export { IResponseSucess };