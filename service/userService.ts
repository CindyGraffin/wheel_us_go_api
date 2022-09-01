import { RegisterUserDto } from './../dtos/RegisterUserDto';
import { UserModel } from "../models/User";
import bcrypt from "bcryptjs";

export class UserService {

    register = async (user: RegisterUserDto): Promise<RegisterUserDto> => {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(user.password!, salt);
        const newUser = new UserModel({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: "user",
            userImg:
                "https://images.unsplash.com/photo-1613318286980-4b3dd8475772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            birthday: "2012-04-23T18:25:43.511Z",
            password: hashPassword,
            city: user.city,
            outingPart: 0,
            outingCre: 0,
        });
        return await newUser.save();
    };
    findFriendsByUserId = (id: string) => {
        return UserModel.findById(id).orFail().populate('users').then((user) =>  {return user?.friendsId})
    }
}

export const userService = Object.freeze(new UserService());
