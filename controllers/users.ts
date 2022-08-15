import { User } from "../models/User";
import { Request, Response } from "express";


export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mail: req.body.mail,
            password: req.body.password,
            city: req.body.city,
            outingPart: 0,
            outingCre: 0
        })
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error); 
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error); 
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error); 
    }
}