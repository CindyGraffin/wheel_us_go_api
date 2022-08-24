import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/User";

const addFriend = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserModel.findByIdAndUpdate()
    } catch (error) {
        
    }
}