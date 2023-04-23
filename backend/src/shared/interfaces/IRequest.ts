import { Request } from "express";

//@ts-ignore
export interface IRequest<Body, Params> extends Request {
    user_id?: number;
    body: Body;
    jwt: string;
    params: Params;
    headers: {
        authorization?: string | undefined;
    }
};
