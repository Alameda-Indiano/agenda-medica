import { Response } from "express";
import { Send } from "express-serve-static-core";
import { code } from "./StatusCode";

export interface IResponse<T> extends Response {
    status: (code: code) => this;
    json: Send<T, this>;
};
