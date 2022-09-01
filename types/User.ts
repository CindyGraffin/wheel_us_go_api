import mongoose, { Schema, Types } from "mongoose";

type User = {
    _id: mongoose.Schema.Types.ObjectId;
    firstname: string;
    lastname: string;
    email: string;
    birthday: Date;
    role: string;
    password: string | undefined;
    city: string;
    userImg?: string;
    outingPart: number;
    outingCre: number;
    // Types.ObjectId à vérifier
    roomsId?: mongoose.Schema.Types.ObjectId[];
    friendsId?: mongoose.Schema.Types.ObjectId[];
    groupsId?: mongoose.Schema.Types.ObjectId[];
}

export {User};