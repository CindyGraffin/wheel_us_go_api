import mongoose, {Schema, Types } from "mongoose";

type WheelAperoType = {
    setUp: boolean;
    launched: boolean;
    person?: mongoose.Schema.Types.ObjectId;
}

type Dresscode = {
    setUp: boolean;
    description?: string;
}

type Room = {
    _id: mongoose.Schema.Types.ObjectId;
    creatorId: mongoose.Schema.Types.ObjectId;
    placeName: string;
    address: string;
    date: Date;
    partIds: [mongoose.Schema.Types.ObjectId];
    theme: string;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
}

export {Room, WheelAperoType};