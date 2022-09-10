import mongoose from "mongoose";
import { MessageDto } from "../dtos/message.dto";

const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: String
        },
        sender: {
            type: String
        },
        text: {
            type: String
        }
    },
    { timestamps: true }
)

const MessageModel = mongoose.model<MessageDto>('Message', MessageSchema)

export {MessageModel};