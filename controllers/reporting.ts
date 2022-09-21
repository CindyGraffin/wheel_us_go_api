import { createError } from "./../utils/createError";
import { NextFunction, Request, Response } from "express";
import { reportingService } from "../service/reportingService";

export class ReportingController {
    private reportingService = reportingService;
    createReport = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const newReport = await this.reportingService.createReport(
                req.body,
                req.params.id
            );
            res.status(200).json(newReport);
        } catch (err) {
            next(createError(400, "Une Erreur innatendue est survenue !"));
        }
    };
}
