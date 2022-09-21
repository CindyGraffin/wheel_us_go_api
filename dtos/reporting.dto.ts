import { Dto } from "./dto";
import mongoose, { Schema, Types } from "mongoose";

type Reporting = {
    userId: mongoose.Schema.Types.ObjectId;
    firstname: string;
    lastname: string;
    email: string;
};

export interface ReportingDto extends Dto {
    _id: mongoose.Schema.Types.ObjectId;
    userId: mongoose.Schema.Types.ObjectId;
    category: string;
    reportBy: Reporting;
    comment: string;
    messageDetailsId?: string;
}
