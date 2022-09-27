import { Request, Response, NextFunction } from "express";
import { userService } from "../service/userService";
import jwt from "jsonwebtoken";

<<<<<<< HEAD
export class AuthController {
=======
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
>>>>>>> 227aba54fa672ecac982d317c13771826283ffa5

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
