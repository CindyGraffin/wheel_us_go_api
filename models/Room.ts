
import mongoose from "mongoose";
import { IRoom } from "../types/IRoom";
const {Schema} = mongoose;

const RoomSchema = new Schema<IRoom>({
    tableCreator: {
        type: Schema.Types.ObjectId,
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
        type: [Schema.Types.ObjectId],
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