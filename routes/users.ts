import { ReportingController } from "./../controllers/reporting";
import { FriendController } from "./../controllers/friends";

import express from "express";
import { UserController } from "../controllers/users";

const usersRouter = express.Router();

const userController = new UserController();
const friendController = new FriendController();
const reportingController = new ReportingController();

usersRouter.get("/", userController.getAllUsers);
usersRouter.get("/:id", userController.getUserById);
usersRouter.get("/friends/:id", friendController.getFriendsByUserId);
usersRouter.post("/ban/:id", userController.blockUserById);

usersRouter.post("/report/:id", reportingController.createReport);
usersRouter.get("/report/:id", reportingController.getReportsByUserId);


export { usersRouter };
