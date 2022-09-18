import express from 'express';
import { ConversationController } from '../controllers/conversation';


const conversationRouter = express.Router()

const conversationController = new ConversationController()

conversationRouter.post('/newconversation', conversationController.createConversation)
conversationRouter.get('/:userId', conversationController.getConversationsByUserId)
conversationRouter.delete('/:conversationId', conversationController.deleteConversationById)

export {conversationRouter};