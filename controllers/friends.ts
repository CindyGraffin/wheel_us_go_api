import { userService } from './../service/userService';
import { NextFunction, Request, Response } from "express";


export class FriendsController {
    private service = userService

    getFriendsByUserId = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const friends = await this.service.getFriendsByUserId(req.params.id);
            res.status(200).send(friends);
        } catch (error) {
            console.log(error)
        }
    }

}

// GetFriendsByUserId -> service

