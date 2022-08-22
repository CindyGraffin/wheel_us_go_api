import mongoose, {Types } from "mongoose";

interface WheelAperoType {
    setUp: boolean;
    launched: boolean;
    person?: Types.ObjectId;
}

interface Dresscode {
    setUp: boolean;
    description?: string;
}

interface IRoom {
    roomCreator: string;
    placeName: string;
    address: string;
    date: Date;
    theme: string;
    usersId: mongoose.Types.ObjectId[];
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
}

export {IRoom, WheelAperoType};