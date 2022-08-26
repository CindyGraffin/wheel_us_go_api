import mongoose from "mongoose";
import { Room } from "../types/Room";
const {Schema} = mongoose;

const RoomSchema = new Schema<Room>({
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
    partIds: [{
        type: Schema.Types.ObjectId,
        required: true
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

const RoomModel = mongoose.model<Room>('Room', RoomSchema)

export {RoomModel};