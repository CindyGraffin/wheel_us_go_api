import mongoose, { Schema, Types } from "mongoose";

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
    role: string;
    password: string | undefined;
    city: string;
    userImg?: string;
    outingPart: number;
    outingCre: number;
    // Types.ObjectId à vérifier
    roomsId?: [Schema.Types.ObjectId];
    friendsId?: [Schema.Types.ObjectId];
    groupsId?: [Schema.Types.ObjectId];
}

export {IUser};