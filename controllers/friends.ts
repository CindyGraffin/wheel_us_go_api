import { userService } from './../service/userService';
import { NextFunction, Request, Response } from "express";


export class FriendsController {
    private service = userService

    getFriendsByUserId = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const getAllFriendsByUserId = await this.service.findFriendsByUserId(req.body);
            res.status(200).send(getAllFriendsByUserId);
        } catch (error) {
            console.log(error)
        }
    }

}

// GetFriendsByUserId -> service

