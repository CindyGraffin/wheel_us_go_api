import jwt from 'jsonwebtoken';
import { createError } from './index';
import {NextFunction, Response} from 'express';
import { IRequest } from '../types/IRequest';

export const verifyToken = (req: IRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, 'You are not authenticated'))
    }
    // have to find the great type for parameters
    jwt.verify(token, `${process.env.JWT}`, (error: any, user: any) => {
        if (error) {
            return next(createError(403, 'Token is not valid'))
        }
        req.user = user
        next()
    })
}