import mongoose, { Types } from "mongoose";

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    birthday?: Date;
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

export {IUser};