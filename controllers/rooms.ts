import { Request, Response, NextFunction } from "express";
import { Room } from "../models/Room";
import { User } from "../models/User";
import { IUser } from "../types/IUser";

export const createRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const usersEmails: string[] = req.body.usersEmails;
        const usersIds: IUser[] = [];
        const newRoom = new Room({
            roomCreator: "630294d6cbd0d3768a5d03b7",
            date: new Date(),
            placeName: req.body.placeName,
            address: req.body.address,
            theme: req.body.theme,
            aperoWheel: {
                setUp: false,
                launched: false,
            },
            dresscode: {
                setUp: false,
            },
        });
        try {
            const savedRoom = await newRoom.save();
            usersEmails.map(async (userEmail, room) => {
                try {
                    const user = await User.findOneAndUpdate(
                        {
                            email: userEmail,
                        },
                        {
                            $push: { roomsId: savedRoom._id },
                        }
                    );
                } catch (error) {
                    next(error);
                }
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json(usersEmails);
    } catch (error) {
        next(error);
    }
};
