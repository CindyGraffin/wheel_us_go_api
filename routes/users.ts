import { FriendsController } from "./../controllers/friends";
import express from "express";
import { getAllUsers, getUserById } from "../controllers/users";
import { verifyToken } from "../utils";

const usersRouter = express.Router();
const friendsController = new FriendsController();

// GET ALL USERS
usersRouter.get("/", getAllUsers);

// GET ONE USER
usersRouter.get("/getbyid/:id", getUserById);

// GET FRIENDS BY USER ID
usersRouter.get("/friends/:id", friendsController.getFriendsByUserId);

export { usersRouter };
