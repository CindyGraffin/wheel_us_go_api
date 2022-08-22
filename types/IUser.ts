import mongoose, { Types } from "mongoose";

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
    roomsId?: mongoose.Types.ObjectId[];
    friendsId?: Types.DocumentArray<Types.ObjectId>;
    groupsId?: Types.DocumentArray<Types.ObjectId>;
}

export {IUser};