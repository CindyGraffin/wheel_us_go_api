import express from 'express';
import {  RoomController } from '../controllers/rooms';
import { verifyToken } from '../utils';

const roomsRouter = express.Router()

const roomController = new RoomController();

roomsRouter.post('/createroom', roomController.createRoom)
roomsRouter.get('/:id', roomController.getRoomsByUserId)

export {roomsRouter};