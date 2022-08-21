import { User } from "../models/User";
import { NextFunction, Request, Response } from "express";

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error); 
    }
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        next(error); 
    }
}

