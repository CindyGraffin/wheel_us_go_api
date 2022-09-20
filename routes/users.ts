import { ReportingController } from "./../controllers/reporting";
import { FriendsController } from "./../controllers/friends";

import express from "express";
import { UserController } from "../controllers/users";

const usersRouter = express.Router();

const userController = new UserController();
const friendController = new FriendsController();
const reportingController = new ReportingController();

usersRouter.get("/", userController.getAllUsers);
usersRouter.get("/:id", userController.getUserById);
usersRouter.get("/friends/:id", friendController.getFriendsByUserId);
usersRouter.post("/ban/:id", userController.blockUserById);

usersRouter.post("/report/:id", reportingController.createReport);

export { usersRouter };
