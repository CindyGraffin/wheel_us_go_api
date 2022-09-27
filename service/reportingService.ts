import { ReportingDto } from "./../dtos/reporting.dto";
import { UserModel } from "../models/User";
import { ReportingModel } from "../models/Reporting";
import mongoose from "mongoose";

export class ReportingService {
    createReport = async (
        payload: ReportingDto,
        userReportedId: string
    ): Promise<any> => {
        const newReport = new ReportingModel(payload);

        await newReport.save(() => {
            this.reportUserById(userReportedId, newReport);
        });
        return newReport;
    };

    getAllReports = async (): Promise<ReportingDto[]> => {
        const reports = await ReportingModel.find().orFail();
        return reports;
    };

    reportUserById = async (
        userReportId: string,
        newReport: ReportingDto
    ): Promise<void> => {
        await UserModel.findByIdAndUpdate(userReportId, {
            $push: { reportingsId: newReport._id },
        }).orFail();
    };

    getReportByUserId = async (
        id: string
    ): Promise<mongoose.Schema.Types.ObjectId[]> => {
        const response = await UserModel.findById(id)
            .orFail()
            .populate("reportingsId")
            .select("reportingsId");

        const userRepport = response.reportingsId;
        return userRepport;
    };

    getReportById = async (id: string): Promise<any> => {
        return await ReportingModel.findById(id).orFail();
    };
}

export const reportingService = Object.freeze(new ReportingService());
