import mongoose from "mongoose";
import { RoomModel } from "../models/Room";
import { userService } from "./userService";
import { UserModel } from "../models/User";
import { CreateRoomDto, RoomDto } from "../dtos/room.dto";



export class RoomService {

    createRoom = async (room: CreateRoomDto): Promise<CreateRoomDto> => {
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

    getRoomById = async(id: string) => {
        const room = await RoomModel.findById(id)
        return room
    }

    getRoomByIdWithParts = async(id: string) => {
        const room = await RoomModel
            .findById(id)
            .orFail()
            .lean()
            .populate("partIds", "firstname lastname userImg")
        return room;
    }


    getRoomsByCreatorId = async(id: string): Promise<RoomDto[]> => {
        const rooms = await RoomModel.find(
            {creatorId: id}
        ).exec()
        return rooms 
    }

    getRoomsByUserId = async(id: string): Promise<mongoose.Schema.Types.ObjectId[] | undefined> => {
        const response = await UserModel.findById(id).orFail().populate('roomsId').select('roomsId')
        const userRooms = response.roomsId
        return userRooms;
    }

    deleteUserInRoom = async(roomId: string, userId: string) => {
        await userService.deleteRoomInUser(userId, roomId)
        const room = await RoomModel.findByIdAndUpdate(
            roomId,
            {$pull: {partIds: userId}},
            {new: true}
        ).orFail();
        return room;
    }
} 

export const roomService = Object.freeze(new RoomService());
