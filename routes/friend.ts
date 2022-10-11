import { FriendController } from "./../controllers/friends";
import express from "express";

const friendRouter = express.Router();

const friendController = new FriendController();

friendRouter.put("/create", friendController.createFriend);
friendRouter.get("/:id", friendController.getFriendsByUserId);
friendRouter.delete(
    "/:userId/:friendId",
    friendController.deleteFriendByUserId
);

export { friendRouter };
