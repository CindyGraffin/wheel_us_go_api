import { NextFunction, Request, Response } from "express";
import { ConversationDto } from "../dtos/conversation.dto";
import { conversationService } from "../service/conversationService";
import { messageService } from "../service/messageService";

export class ConversationController {

    private service = conversationService;

    createConversation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const newConversation = await this.service.createConversation(req.body.senderId, req.body.receiverId)
            res.status(200).send(newConversation)
        } catch (error) {
            next(error)
        }
    }

    getConversationsByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const conversation = await this.service.getConversationsByUserId(req.params.userId)
            res.status(200).json(conversation)
        } catch (error) {
            next(error);
        }
    }

    deleteConversationById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await messageService.deleteMessagesByConversationId(req.params.conversationId)
            await this.service.deleteConversationById(req.params.conversationId)
            res.status(200).json('deleted')
        } catch (error) {
            next(error);
        }
    }
}






