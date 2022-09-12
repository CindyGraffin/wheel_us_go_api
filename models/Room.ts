import mongoose from "mongoose";
import { RoomDto } from "../dtos/room.dto";
const {Schema} = mongoose;

const RoomSchema = new Schema<RoomDto>({
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
        type: mongoose.Types.ObjectId,
        ref:'User',
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
            type: mongoose.Types.ObjectId
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

const RoomModel = mongoose.model<RoomDto>('Room', RoomSchema)

export {RoomModel};