import mongoose from "mongoose";
import { IUser } from "../types/IUser";

const {Schema} = mongoose;

const UserSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    birthday: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
    },
    outingPart: {
        type: Number,
        required: true
    },
    outingCre: {
        type: Number,
        required: true
    },
    tablesPartId: {
        type: [Schema.Types.ObjectId],
        required: true
    },
    friendsId: {
        type: [Schema.Types.ObjectId],
        required: true
    },
    groupsId: {
        type: [Schema.Types.ObjectId],
        required: true
    }
})

const User = mongoose.model<IUser>('User', UserSchema)

export {User};