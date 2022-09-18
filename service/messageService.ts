import { MessageDto } from "../dtos/message.dto";
import { MessageModel } from "../models/MessageModel";

export class MessageService {
    
    addMessage = async (message: MessageDto): Promise<MessageDto> => {
        const newMessage = new MessageModel(message)
        await newMessage.save()
        return newMessage
    }

    getMessages = async (conversationId: string): Promise<MessageDto[]> => {
        const messages = MessageModel.find({
            conversationId: conversationId
        })
        return messages;
    }

    deleteMessagesByConversationId = async(conversationId: string): Promise<void> => {
        await MessageModel.deleteMany({
            conversationId: conversationId
        })
    } 
} 

export const messageService = Object.freeze(new MessageService());