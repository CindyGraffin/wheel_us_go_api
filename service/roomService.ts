
import mongoose, { Schema } from "mongoose";
import { CreateRoomDto } from "../dtos/CreateRoomDto";
import { RoomModel } from "../models/Room";
import { userService } from "./userService";



export class RoomService {

    createRoom = async (room: CreateRoomDto): Promise<CreateRoomDto> => {
        const requestIds: mongoose.Schema.Types.ObjectId[] = room.partIds;
        const partIds: mongoose.Schema.Types.ObjectId[] = [];
        requestIds.forEach((id) => {
            partIds.push(id);
        });
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
}

export const roomService = Object.freeze(new RoomService());

