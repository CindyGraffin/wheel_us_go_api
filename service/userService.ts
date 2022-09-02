
import { UserModel } from "../models/User";
import bcrypt from "bcryptjs";
import { createError } from "../utils";
import { Credentials } from "../types/Credentials";
import mongoose from "mongoose";
import { RegisterUserDto, UserDto } from "../dtos/users.dto";
import { RoomDto } from "../dtos/room.dto";

export class UserService {

    register = async (user: RegisterUserDto): Promise<RegisterUserDto> => {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(user.password!, salt);
        const newUser = new UserModel({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: "user",
            userImg:
                "https://images.unsplash.com/photo-1613318286980-4b3dd8475772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            birthday: "2012-04-23T18:25:43.511Z",
            password: hashPassword,
            city: user.city,
            outingPart: 0, 
            outingCre: 0,
        });
        return await newUser.save();
    };

    login = async (credentials: Credentials): Promise<UserDto> => {
        const user = await UserModel.findOne({
            email: credentials.email,
        })
            .populate("friendsId")
            .populate("roomsId");
        if (!user) {
            throw createError(400, "Wrong password or username");
        }
        const goodPassword = await bcrypt.compareSync(
            credentials.password,
            user?.password || ""
        );
        if (!goodPassword) {
            throw createError(400, "Wrong password or username");
        }

        // we ignore next line because typescript will say user._doc doesn't exist on type User
        // @ts-ignore
        const { password, ...othersInfos } = user._doc;
        return {...othersInfos}
    };

    addRoomIdToUser = async(id: mongoose.Schema.Types.ObjectId, newRoom: RoomDto) => {
        await UserModel.findByIdAndUpdate(
            id,
            {
                $push: { roomsId: newRoom._id },
            }
        );
    }

    getUserById = async (id: string): Promise<UserDto | null> => {
        const user = await UserModel.findById(id)
        return user;
    }

    getAllUsers = async(): Promise<UserDto[]> => {
        const users = await UserModel.find()
        return users; 
    }
}

export const userService = Object.freeze(new UserService());
