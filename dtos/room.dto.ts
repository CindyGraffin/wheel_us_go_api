import mongoose, {Schema, Types } from "mongoose";
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
    partIds: [mongoose.Schema.Types.ObjectId];
    theme: string;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
}

export interface CreateRoomDto extends Omit<RoomDto, "aperoWheel.launched" | "aperoWheel.person">{

}
