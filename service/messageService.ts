import { MessageDto } from "../dtos/message.dto";
import { MessageModel } from "../models/MessageModel";

export class MessageService {
    
    addMessage = async (message: MessageDto): Promise<MessageDto> => {
        const newMessage = new MessageModel(message)
        await newMessage.save()
        return newMessage
    }
} 

export const messageService = Object.freeze(new MessageService());