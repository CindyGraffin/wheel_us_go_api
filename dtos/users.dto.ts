import { Dto } from "./dto";
import mongoose, { Schema, Types } from "mongoose";

export interface UserDto extends Dto {
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
    roomsId?: mongoose.Schema.Types.ObjectId[];
    friendsId?: mongoose.Schema.Types.ObjectId[];
    groupsId?: mongoose.Schema.Types.ObjectId[];
}

export interface RegisterUserDto extends Omit<UserDto, "friends" | "group" | "userImg" | "birthday" | "outingPart" | "outingCre">{
}


