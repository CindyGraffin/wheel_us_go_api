import mongoose from "mongoose";
import { FriendRequestDto } from "../dtos/friendRequest.dto";

const FriendRequestSchema = new mongoose.Schema(
    {
        senderID: {
            type: mongoose.Schema.Types.ObjectId
        },
        sender: {
            type: String
        },
        receiver: {
            type: String
        },
        friendStatus: {
            type: Boolean
        }
    }
)

const FriendRequestModel = mongoose.model<FriendRequestDto>('FriendRequest', FriendRequestSchema)

export {FriendRequestModel};