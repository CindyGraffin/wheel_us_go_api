import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";

const addFriend = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findByIdAndUpdate()
    } catch (error) {
        
    }
}