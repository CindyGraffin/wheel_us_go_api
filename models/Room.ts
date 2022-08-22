
import { ObjectId } from "mongodb";
import mongoose, { Types } from "mongoose";
import { IRoom } from "../types/IRoom";
const {Schema} = mongoose;

const RoomSchema = new Schema<IRoom>({
    creatorId: {
        type: Schema.Types.ObjectId,
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
    partId: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
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