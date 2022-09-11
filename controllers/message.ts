import { NextFunction, Request, Response } from "express";
import { messageService } from "../service/messageService";

export class MessageController {

    private service = messageService;

    addMesssage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const newMessage = await this.service.addMessage(req.body);
            res.status(200).json(newMessage)
        } catch (error) {
            next(error);
        }
    }

    getMessages = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const messages = await this.service.getMessages(req.params.conversationId)
            res.status(200).json(messages)
        } catch (error) {
            next(error)
        }
    }
}