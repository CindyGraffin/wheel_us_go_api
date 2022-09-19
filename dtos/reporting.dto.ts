import { Dto } from "./dto";
import mongoose, { Schema, Types } from "mongoose";

export interface ReportingDto extends Dto {
    _id: mongoose.Schema.Types.ObjectId;
    category: string;
    userId: mongoose.Schema.Types.ObjectId;
}
