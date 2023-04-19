import { Request } from "express";

export interface IRequest<T> extends Request {
    body: T,
    params: {
        id?: string
    }
};
