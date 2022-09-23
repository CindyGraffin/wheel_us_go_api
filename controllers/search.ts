import { UserModel } from "../models/User";
import { NextFunction, Request, Response } from "express";

export const getUsersBySearch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchName = req.query.fullname;
        console.log(searchName);
        
        const searchUsers = await UserModel.find({
            fullname: {"$regex": searchName, "$options": "i"}
    })
    res.status(200).json(searchUsers)
    } catch (error) {
        next(error); 
    }
} 