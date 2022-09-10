import { NextFunction, Request, Response } from "express";
import { conversationService } from "../service/conversationService";

export class ConversationController {

    private service = conversationService;

    createConversation = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            const newConversation = await this.service.createConversation(req.body.senderId, req.body.receiverId)
            res.status(200).send(newConversation)
        } catch (error) {
            next(error)
        }
    }

    getConversationsByUserId = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            const conversation = await this.service.getConversationsByUserId(req.params.userId)
            res.status(200).json(conversation)
        } catch (error) {
            next(error);
        }
    }
}






