import mongoose, {Schema, Types } from "mongoose";

type WheelAperoType = {
    setUp: boolean;
    launched: boolean;
    person?: Schema.Types.ObjectId;
}

type Dresscode = {
    setUp: boolean;
    description?: string;
}

type Room = {
    creatorId: Schema.Types.ObjectId;
    placeName: string;
    address: string;
    date: Date;
    partIds: [Schema.Types.ObjectId],
    theme: string;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
}

export {Room, WheelAperoType};