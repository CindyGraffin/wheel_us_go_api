import { Dto } from "./dto";
import mongoose, { Schema, Types } from "mongoose";

export interface UserDto extends Dto {
    _id: mongoose.Schema.Types.ObjectId;
    firstname: string;
    lastname: string;
    fullname: string;
    email: string;
    birthday: Date;
    role: string;
    password: string | undefined;
    isActive: boolean;
    city: string;
    userImg?: string;
    outingPart: number;
    outingCre: number;
    roomsId?: mongoose.Schema.Types.ObjectId[];
    friendsId?: mongoose.Schema.Types.ObjectId[];
    groupsId?: mongoose.Schema.Types.ObjectId[];
    reportingsId: mongoose.Schema.Types.ObjectId[];
}

export interface BlockUserDto extends Pick<UserDto, "_id" | "isActive"> {}

export interface RegisterUserDto
    extends Omit<
        UserDto,
        | "friends"
        | "group"
        | "userImg"
        | "birthday"
        | "outingPart"
        | "outingCre"
    > {}

export interface GetFriendsDto
    extends Pick<UserDto, "_id" | "firstname" | "lastname" | "userImg"> {}

export interface PartialUserDto
    extends Pick<UserDto, "_id" | "firstname" | "lastname" | "email"> {}

export interface FriendDto {
    userId: string;
    friendId: string;
}
