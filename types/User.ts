import mongoose, { Schema, Types } from "mongoose";

type User = {
    firstname: string;
    lastname: string;
    fullname: string;
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

export {User};