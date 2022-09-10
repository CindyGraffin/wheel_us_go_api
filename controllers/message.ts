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
}