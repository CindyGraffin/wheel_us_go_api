import { userService } from './../service/userService';
import { NextFunction, Request, Response } from "express";


export class FriendsController {

    private service = userService

    getFriendsByUserId = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const friends = await this.service.getFriendsByUserId(req.params.id);
            res.status(200).json(friends);
        } catch (error) {
            next(error)
        }
    }

}
