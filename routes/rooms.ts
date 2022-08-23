import express from 'express';
import { createRoom } from '../controllers/rooms';
import { verifyToken } from '../utils';

const roomsRouter = express.Router()

roomsRouter.post('/createroom', verifyToken, createRoom)

export {roomsRouter};