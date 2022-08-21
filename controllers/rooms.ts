import { Request, Response, NextFunction } from "express";
import { Room } from "../models/Room";
import { User } from "../models/User";
import { IUser } from "../types/IUser";
import { createError } from "../utils";

export const createRoom = async(req: Request, res: Response, next: NextFunction) => {
    try {
        // const usersEmails: string[] = req.body.usersEmails
        // const usersId: any = []
        // usersEmails.forEach(async userEmail => {
        //     const user = await User.findOne({
        //         email: userEmail
        //     })
        //     if (!user) {
        //         return next(createError(404, 'User not found'));
        //     }

            
        //     usersId.push(user?.firstName)
        // });
        
        const newRoom  = new Room({
            tableCreator: '630294d6cbd0d3768a5d03b7',
            date: new Date(),
            theme: req.body.theme,
            users: req.body.usersEmails,
            aperoWheel: {
                setUp: false,
                launched: false
            },
            dresscode: {
                setUp: false
            }
        })
        await newRoom.save()
        res.status(200).json(newRoom)
    } catch (error) {
        next(error)
    }
}