import { ReportingDto } from "./../dtos/reporting.dto";
import mongoose from "mongoose";

const { Schema } = mongoose;

const ReportingSchema = new Schema<ReportingDto>(
    {
        category: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        messageDetailsId: {
            type: String,
        },
    },
    { timestamps: true }
);

const ReportingModel = mongoose.model<ReportingDto>(
    "Reporting",
    ReportingSchema
);

export { ReportingModel };
