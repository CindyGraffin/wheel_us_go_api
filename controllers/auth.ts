import { Request, Response, NextFunction } from "express";
import { userService } from "../service/userService";
import jwt from "jsonwebtoken";

export class AuthController {

    private service = userService;

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newUser = await this.service.register(req.body);
            res.status(200).send(newUser);
        } catch (error) {
            next(error);
        }
    };

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const randomKey = `${process.env.JWT}`;
            const user = await this.service.login(req.body, next);
            const token = jwt.sign({ id: user.id }, randomKey, {
                expiresIn: "1h",
            });
            res.cookie("access_token", token, {
                httpOnly: true,
            })
                .status(200)
                .send(user);
        } catch (error) {
            next(error);
        }
    };
}
 