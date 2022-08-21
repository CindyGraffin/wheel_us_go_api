import {Types } from "mongoose";

type WheelAperoType = {
    setUp: boolean,
    launched: boolean,
    person: Types.ObjectId | ""
}

type Dresscode = {
    setUp: boolean,
    description: string
}

interface IRoom {
    tableCreator: Types.ObjectId;
    date: Date;
    theme: string;
    users: Types.DocumentArray<Types.ObjectId>;
    aperoWheel: WheelAperoType;
    dresscode: Dresscode
    password: string | undefined;
    city: string;
    userImg?: string;
    outingPart: number;
    outingCre: number;
    // Types.ObjectId à vérifier
    tablesPartId?: Types.DocumentArray<Types.ObjectId>;
    friendsId?: Types.DocumentArray<Types.ObjectId>;
    groupsId?: Types.DocumentArray<Types.ObjectId>;
}

export {IRoom};