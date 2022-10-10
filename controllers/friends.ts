import { FriendDto } from "./../dtos/users.dto";
import { userService } from "./../service/userService";
import { NextFunction, Request, Response } from "express";
import { friendService } from "../service/friendService";

export class FriendController {
    private userService = userService;
    private friendService = friendService;

    createFriend = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const payload: FriendDto = {
            userId: req.body.userId,
            friendId: req.body.friendId,
        };

        try {
            const friends = await this.friendService.createFriend(payload);
            res.status(200).json(friends);
        } catch (error) {
            next(error);
        }
    };

    getFriendsByUserId = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const friends = await this.friendService.getAllFriendByUserId(
                req.params.id
            );
            res.status(200).json(friends);
        } catch (error) {
            next(error);
        }
    };

    deleteFriendByUserId = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const payload: FriendDto = {
            userId: req.params.userId,
            friendId: req.params.friendId,
        };

        try {
            const friends = await this.friendService.deleteFriendByUserId(
                payload
            );
            res.status(200).json(friends);
        } catch (error) {
            next(error);
        }
    };
}
