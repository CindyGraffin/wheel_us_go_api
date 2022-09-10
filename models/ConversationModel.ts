import mongoose from "mongoose";
import { ConversationDto } from "../dtos/conversation.dto";

const ConversationSchema = new mongoose.Schema(
    {
        members: {
            type: Array
        }
    },
    { timestamps: true }
)

const ConversationModel = mongoose.model<ConversationDto>('Conversation', ConversationSchema)

export {ConversationModel};