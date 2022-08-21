import {Types } from "mongoose";

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
    tableCreator: string[];
    placeName: string;
    address: string;
    date: Date;
    theme: string;
    users: Types.DocumentArray<Types.ObjectId>;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode;
}

export {IRoom, WheelAperoType};