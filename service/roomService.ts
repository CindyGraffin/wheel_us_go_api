import { createRoomDto } from './../dtos/CreateRoomDto';
import mongoose, { Schema } from "mongoose";
import { RoomModel } from "../models/Room";
import { userService } from "./userService";
import {Room} from '../types/Room';
import { UserController } from "../controllers/users";
import { UserModel } from "../models/User";



export class RoomService {

    createRoom = async (room: createRoomDto): Promise<createRoomDto> => {
        const requestIds: mongoose.Schema.Types.ObjectId[] = room.partIds;
        const partIds: mongoose.Schema.Types.ObjectId[] = [];
        requestIds.forEach((id) => {
            partIds.push(id);
        });
        partIds.push(room.creatorId)
        const newRoom = new RoomModel({
            _id: new mongoose.Types.ObjectId(),
            creatorId: room.creatorId,
            date: new Date(),
            placeName: room.placeName,
            address: room.address,
            theme: room.theme,
            partIds: partIds,
            aperoWheel: {
                setUp: room.aperoWheel.setUp,
                launched: false,
                person: undefined,
            },
            dresscode: {
                setUp: room.dresscode.setUp,
                description: room.dresscode.description,
            },
        });
        await newRoom.save(() => {
            partIds.map(async (id) => {
                userService.addRoomIdToUser(id, newRoom)
            });
        })
        return newRoom;
    };

    getRoomsByCreatorId = async(id: string): Promise<Room[]> => {
        const rooms = await RoomModel.find(
            {creatorId: id}
        ).exec()
        return rooms 
    }

    getRoomsByUserId = async(id: string): Promise<any> => {
        const userRooms = await UserModel.findById(id).populate('roomsId').select('roomsId')
        return userRooms;
    }

    
}

export const roomService = Object.freeze(new RoomService());

