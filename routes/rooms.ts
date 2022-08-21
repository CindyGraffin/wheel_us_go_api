import express from 'express';
import { createRoom } from '../controllers/rooms';

const roomsRouter = express.Router()

roomsRouter.post('/createroom', createRoom)

export {roomsRouter};