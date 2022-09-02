
import express from "express";
import { UserController } from "../controllers/users";

const usersRouter = express.Router();

const userController = new UserController();


usersRouter.get("/", userController.getAllUsers);
usersRouter.get("/:id", userController.getUserById);



export { usersRouter };
