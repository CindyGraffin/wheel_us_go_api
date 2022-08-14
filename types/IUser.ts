import mongoose from "mongoose";

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
    tablesPartId: string[];
    friendsId: string[];
    groupsId: string[];
}

export {IUser};