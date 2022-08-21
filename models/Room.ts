
import mongoose from "mongoose";
import { IRoom } from "../types/IRoom";
const {Schema} = mongoose;

const RoomSchema = new Schema<IRoom>({
    tableCreator: {
        type: [String],
        required: true
    },
    placeName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    users: {
        type: [String],
        required: true
    },
    aperoWheel: {
        setUp: {
            type: Boolean,
            required: true
        },
        launched: {
            type: Boolean,
            required: true
        }, 
        person: {
            type: Schema.Types.ObjectId
        }
    },
    dresscode: {
        setUp: {
            type: Boolean,
            required: true
        },
        description: {
            type: String
        }
    }
}, {timestamps: true}
)

const Room = mongoose.model<IRoom>('Room', RoomSchema)

export {Room};