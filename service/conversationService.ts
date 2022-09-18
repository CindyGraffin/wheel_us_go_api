import { ConversationDto } from "../dtos/conversation.dto";
import { ConversationModel } from "../models/ConversationModel";
import { messageService } from "./messageService";

export class ConversationService {
    
    createConversation = async(senderId: string, receiverId: string): Promise<ConversationDto> => {
        const newConversation = new ConversationModel({
            members: [senderId, receiverId]
        })
        await newConversation.save()
        return newConversation;
    }

    getConversationsByUserId = async(userId: string): Promise<ConversationDto[]> => {
        const conversation = await ConversationModel.find({
            members: {
                $in: [userId]
            }
        })
        return conversation;
    }

    deleteConversationById = async(conversationId: string): Promise<void> => {
        await ConversationModel.deleteOne({
            _id: conversationId
        })
    }
} 

export const conversationService = Object.freeze(new ConversationService());

