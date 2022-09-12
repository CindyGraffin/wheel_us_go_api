import { NextFunction, Request, Response } from "express";
import { statService } from "../service/statService";

export class StatController {
    private service = statService;

    getRegistredUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const count = await this.service.getCountsUsers();
            res.status(200).json(count);
        } catch (error) {
            next(error);
        }
    };
}
