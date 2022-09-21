import { ReportingDto } from "./../dtos/reporting.dto";
import mongoose, { Mongoose, Types } from "mongoose";

const { Schema } = mongoose;

const ReportingSchema = new Schema<ReportingDto>(
    {
        category: {
            type: String,
            required: true,
        },
        reportBy: {
            userId: {
                type: mongoose.Types.ObjectId,
                ref: "User",
                require: true,
            },
            firstname: {
                type: String,
                require: true,
            },
            lastname: {
                type: String,
                require: true,
            },
            email: {
                type: String,
                require: true,
            },
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
