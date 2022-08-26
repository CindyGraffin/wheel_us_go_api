import { Request } from "express";
import { User } from "./User";

export interface IRequest extends Request {
    user?: User;
}