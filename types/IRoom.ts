import mongoose, {Schema, Types } from "mongoose";

interface WheelAperoType {
    setUp: boolean;
    launched: boolean;
    person?: Schema.Types.ObjectId;
}

interface Dresscode {
    setUp: boolean;
    description?: string;
}

interface IRoom {
    creatorId: Schema.Types.ObjectId;
    placeName: string;
    address: string;
    date: Date;
    partIds: [Schema.Types.ObjectId],
    theme: string;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
}

export {IRoom, WheelAperoType};