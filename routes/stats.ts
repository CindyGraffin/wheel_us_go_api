import express from "express";
import { StatController } from "../controllers/stats";

const statsRouter = express.Router();

const statController = new StatController();

statsRouter.get("/users/registred", statController.getRegistredUser);

export { statsRouter };
