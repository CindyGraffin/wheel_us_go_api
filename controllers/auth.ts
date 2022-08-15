import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import bcrypt from 'bcryptjs';
import { createError } from "../utils/createError";
import jwt from 'jsonwebtoken';

export const register = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mail: req.body.mail,
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

export const login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({
            mail: req.body.mail
        })
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
            randomKey
        )
        res
            .cookie('access_token', token, {
                httpOnly: true
            })
            .status(200)
            .json(user);
    } catch (error) {
        next(error);
    }
}