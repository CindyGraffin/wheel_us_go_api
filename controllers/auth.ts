import { Request, Response, NextFunction } from "express";
import { userService } from "../service/userService";
import jwt from "jsonwebtoken";

export class AuthController {

    private service = userService;

    register = async (req: Request, res: Response, next: NextFunction): Promise<void>=> {
        try {
            const newUser = await this.service.register(req.body);
            res.status(200).json(newUser);
        } catch (error) {
            next(error);
        }
    };

    login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const randomKey = `${process.env.JWT}`;
            const user = await this.service.login(req.body);
            const token = jwt.sign({ id: user._id }, randomKey, {
                expiresIn: "1h",
            });
            res.cookie("access_token", token, {
                httpOnly: true,
            })
                .status(200)
                .json(user);
        } catch (error) {
            next(error);
        }
    };
}
