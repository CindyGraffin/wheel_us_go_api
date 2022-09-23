import { ReportingController } from "./../controllers/reporting";
import express from "express";

const reportRouter = express.Router();

const reportController = new ReportingController();

reportRouter.get("/", reportController.getAllReports);
reportRouter.get("/:id", reportController.getReportById);

export { reportRouter };
