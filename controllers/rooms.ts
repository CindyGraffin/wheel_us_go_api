import { Request, Response, NextFunction } from "express";
import mongoose, { Schema } from "mongoose";
import { Room } from "../models/Room";
import { User } from "../models/User";

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
			aperoWheel: {
				setUp: false,
				launched: false,
			},
			dresscode: {
				setUp: false,
			},
		});
		try {
			newRoom.save((err) => {
				const usersEmails: string[] = req.body.usersEmails;
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
				res.status(200).json(newRoom);
			});
		} catch (error) {
			next(error);
		}
	} catch (error) {
		next(error);
	};
};
