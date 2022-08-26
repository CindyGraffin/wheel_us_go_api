import mongoose from "mongoose";
import { User } from "../types/User";

const {Schema} = mongoose;

const UserSchema = new Schema<User>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birthday: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true
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
        type: String
    },
    outingPart: {
        type: Number,
        required: true
    },
    outingCre: {
        type: Number,
        required: true
    },
    roomsId: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Room'
        }
    ],
    friendsId: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    groupsId: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {timestamps: true}
)

const UserModel = mongoose.model<User>('User', UserSchema)

export {UserModel};