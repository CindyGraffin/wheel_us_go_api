import express from 'express';
import { addUsersToRoom, createRoom } from '../controllers/rooms';
import { verifyToken } from '../utils';

const roomsRouter = express.Router()

roomsRouter.post('/createroom', verifyToken, createRoom, addUsersToRoom)

export {roomsRouter};