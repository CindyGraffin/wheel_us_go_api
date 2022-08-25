import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/User";
import bcrypt from 'bcryptjs';
// argon 2i
import { createError } from "../utils/createError";
import jwt from 'jsonwebtoken';
import { User } from "../types/User";

export const register = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt)
        const newUser = new UserModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            role: 'user',
            userImg: 'https://images.unsplash.com/photo-1613318286980-4b3dd8475772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            birthday: '2012-04-23T18:25:43.511Z',
            password: hashPassword,
            city: req.body.city,
            outingPart: 0,
            outingCre: 0
        })
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        next(error);
    }
}

export const login = async(req: Request, res: Response, next: NextFunction): Promise<User | Error | void>  => {
    try {
        const user = await UserModel.findOne({
            email: req.body.email
        }).populate('friendsId').populate('roomsId')
        if (!user) {
            return next(createError(404, 'User not found'));
        }
        const goodPassword = await bcrypt.compareSync(req.body.password, (user?.password || ''))
        if (!goodPassword) {
            return next(createError(400, 'Wrong password or username'));
        }
        const randomKey = `${process.env.JWT}`
        const token = jwt.sign(
            {id: user.id},
            randomKey,
            {expiresIn: '24h'}
        )
        // we ignore next line because typescript will say user._doc doesn't exist on type IUser
        // @ts-ignore
        const {password, ...othersInfos} = user._doc
        res
            .cookie('access_token', token, {
                httpOnly: true
            })
            .status(200)
            .json({...othersInfos});
    } catch (error) {
        next(error);
    }
}