import express from 'express';
import { MessageController } from '../controllers/message';

const messageRouter = express.Router()

const messageController = new MessageController();

messageRouter.post('/newmessage', messageController.addMesssage)

export {messageRouter};