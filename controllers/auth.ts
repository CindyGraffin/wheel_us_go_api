import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import bcrypt from 'bcryptjs';

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
            console.log('user does not exist');
        }
        const goodPassword = await bcrypt.compareSync(req.body.password, (user?.password || ''))
        if (!goodPassword) {
            res.send('wrong password')
        } else {
            res.status(200).json(user);

        }
    } catch (error) {
        next(error);
    }
}