import { StatCountDto } from "../dtos/stats.dto";
import { UserModel } from "../models/User";

export class StatService {
    getCountsUsers = async (): Promise<StatCountDto> => {
        const count = await UserModel.find().count();
        return { registerUserCount: count };
    };
}

export const statService = Object.freeze(new StatService());
