import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { Room } from "../models/Room";
import { User } from "../models/User";

let createRoomId: ObjectId;

export const createRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newRoom = new Room({
            _id: new mongoose.Types.ObjectId(),
            creatorId: new mongoose.Types.ObjectId(req.body.creatorId),
            date: new Date(),
            placeName: req.body.placeName,
            address: req.body.address,
            theme: req.body.theme,
            partEmails: req.body.usersEmails,
            aperoWheel: {
                setUp: req.body.wheelSetUp,
                launched: false,
                person: undefined,
            },
            dresscode: {
                setUp: req.body.dresscodeSetUp,
                description: req.body.dresscodeDesc,
            },
        });
        try {
            newRoom.save(() => {
                const usersEmails: string[] = req.body.usersEmails;
                createRoomId = newRoom._id;
                usersEmails.map(async (userEmail) => {
                    try {
                        const user = await User.findOneAndUpdate(
                            {
                                email: userEmail,
                            },
                            {
                                $push: { roomsId: newRoom._id },
                            }
                        );
                    } catch (error) {
                        next(error);
                    }
                });
                next();
            });
        } catch (error) {
            next(error);
        }
    } catch (error) {
        next(error);
    }
};

export const addUsersToRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const usersEmails: string[] = req.body.usersEmails;
    usersEmails.map(async (userEmail) => {
        try {
            const user = await User.findOne({
                email: userEmail
            });
				try {
					const room = await Room.findByIdAndUpdate(createRoomId, 
						{
							$push: { partIds: user?._id }
						}
					);
				} catch (error) {
					next(error)
				}
                
        } catch (error) {
            next(error);
        }
    });
                res.status(200).json("ok");

};
