import { Request } from "express";

//@ts-ignore
export interface IRequest<Body, Params> extends Request {
    body: Body,
    params: Params
};
