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
        // required: true
    },
    password: {
        type: String,
        required: true,
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
        // Types.ObjectID à vérifier 
        type: [Schema.Types.ObjectId],
    },
    friendsId: {
        type: [Schema.Types.ObjectId],
    },
    groupsId: {
        type: [Schema.Types.ObjectId]
    }
}, {timestamps: true}
)

const User = mongoose.model<IUser>('User', UserSchema)

export {User};