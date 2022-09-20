import { ReportingDto } from "./../dtos/reporting.dto";
import { UserModel } from "../models/User";
import { ReportingModel } from "../models/Reporting";

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

    reportUserById = async (
        userReportId: string,
        newReport: ReportingDto
    ): Promise<void> => {
        await UserModel.findByIdAndUpdate(userReportId, {
            $push: { reportingsId: newReport._id },
        }).orFail();
    };
}

export const reportingService = Object.freeze(new ReportingService());
