import express from 'express';
import {  RoomController } from '../controllers/rooms';


const roomsRouter = express.Router()

const roomController = new RoomController();

roomsRouter.post('/createroom', roomController.createRoom)
roomsRouter.get('/creator/:id', roomController.getRoomsByCreatorId)
roomsRouter.delete('/:roomid/:userid', roomController.deleteUserInRoom)
roomsRouter.get('/:id', roomController.getRoomsByUserId)

export {roomsRouter};