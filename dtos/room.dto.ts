import { ObjectId } from "mongodb";
import mongoose, {LeanDocument, Schema, Types } from "mongoose";
import { Dto } from "./dto";

type WheelAperoType = {
    setUp: boolean;
    launched: boolean;
    person?: mongoose.Schema.Types.ObjectId;
}

type Dresscode = {
    setUp: boolean;
    description?: string;
}

export interface RoomDto extends Dto {
    _id: mongoose.Schema.Types.ObjectId;
    creatorId: mongoose.Schema.Types.ObjectId;
    placeName: string;
    address: string;
    date: Date;
    time: string;
    partIds: [mongoose.Schema.Types.ObjectId];
    theme: string;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
}

export interface RoomWithPartsDto extends Dto {
    _id: mongoose.Schema.Types.ObjectId;
    creatorId: mongoose.Schema.Types.ObjectId;
    placeName: string;
    address: string;
    date: Date;
    time: string;
    theme: string;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
    partIds: LeanDocument<ObjectId>[]
}

export interface CreateRoomDto extends Dto {
    _id: mongoose.Schema.Types.ObjectId;
    creatorId: mongoose.Schema.Types.ObjectId;
    placeName: string;
    address: string;
    date: Date;
    time: string
    theme: string;
    partIds: [mongoose.Schema.Types.ObjectId];
    aperoWheelSetUp: boolean;
    dresscodeSetUp: boolean;
    dresscodeDescription: string;
}
