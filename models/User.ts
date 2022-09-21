import mongoose from "mongoose";
import { UserDto } from "../dtos/users.dto";

const { Schema } = mongoose;

<<<<<<< Updated upstream
const UserSchema = new Schema<UserDto>(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        birthday: {
            type: Date,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        userImg: {
            type: String,
        },
        outingPart: {
            type: Number,
            required: true,
        },
        outingCre: {
            type: Number,
            required: true,
        },
        roomsId: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Room",
            },
        ],
        friendsId: [
            {
                type: mongoose.Types.ObjectId,
                ref: "User",
            },
        ],
        groupsId: [
            {
                type: mongoose.Types.ObjectId,
                ref: "User",
            },
        ],
        isActive: {
            type: Boolean,
            default: true,
            required: true,
        },
        reportingsId: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Reporting",
            },
        ],
    },
    { timestamps: true }
);
=======
const UserSchema = new Schema<User>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
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
>>>>>>> Stashed changes

const UserModel = mongoose.model<UserDto>("User", UserSchema);

export { UserModel };
