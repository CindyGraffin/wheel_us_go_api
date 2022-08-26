import { UserModel } from "../models/User";
import { NextFunction, Request, Response } from "express";

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserModel.findById(req.params.id).populate('friendsId').populate('roomsId')
        res.status(200).json(user)
    } catch (error) {
        next(error); 
    }
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (error) {
        next(error); 
    }
}

export const getUserFriends = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.params.id).populate('roomsId')
        // const user = await User.findById(req.params.id).populate('friendsId')
        console.log(user);
        
        res.status(200).json(user)
    } catch (error) {
        next(error); 
    }
}


