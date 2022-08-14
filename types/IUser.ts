import mongoose, { Types } from "mongoose";

interface IUser {
    firstName: string;
    lastName: string;
    mail: string;
    birthday: Date;
    password: string;
    city: string;
    userImg?: string;
    outingPart: number;
    outingCre: number;
    tablesPartId?: Types.DocumentArray<Types.ObjectId>;
    friendsId?: Types.DocumentArray<Types.ObjectId>;
    groupsId?: Types.DocumentArray<Types.ObjectId>;
}

export {IUser};