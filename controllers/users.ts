import { NextFunction, Request, Response } from "express";
import { userService } from "../service/userService";

export class UserController {
    
    private service = userService

    getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const user = await this.service.getUserById(req.params.id)            
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }

    getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const users = await this.service.getAllUsers()
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }
}


