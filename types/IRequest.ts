import { Request } from "express";
import { UserDto } from "../dtos/users.dto";

export interface IRequest extends Request {
    user?: UserDto;
}