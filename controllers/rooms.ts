import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { RoomModel } from "../models/Room";
import { UserModel } from "../models/User";
import { roomService } from "../service/roomService";


export class RoomController {

    private service = roomService

    createRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newRoom = await this.service.createRoom(req.body);
            res.status(200).send(newRoom);
        } catch (error) {
            next(error);
        } 
    }

    getRoomsByCreatorId = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const rooms = await this.service.getRoomsByCreatorId(req.params.id);
            res.status(200).send(rooms)
        } catch (error) {
            next(error)
        }
    } 
}

