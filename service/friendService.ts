import { FriendDto, GetFriendsDto } from "../dtos/users.dto";
import { UserModel } from "../models/User";

export class FriendService {

    createFriend = async (payload: FriendDto): Promise<void> => {
        const user = await UserModel.findByIdAndUpdate(payload.userId, {
            $push: { friendsId: payload.friendId },
        }).orFail();
        const friend = await UserModel.findByIdAndUpdate(payload.friendId, {
            $push: { friendsId: payload.userId },
        }).orFail();
    };

    getAllFriendByUserId = async (id: string): Promise<GetFriendsDto> => {
        const userFriends = await UserModel.findById(id)
            .orFail()
            .lean()
            .populate("friendsId", "firstname lastname userImg")
            .select("friendsId");
        return userFriends;
    };

    deleteFriendByUserId = async (payload: FriendDto): Promise<void> => {
        const user = await UserModel.findByIdAndUpdate(payload.userId, {
            $pull: { friendsId: payload.friendId },
        }).orFail();
        const friend = await UserModel.findByIdAndUpdate(payload.friendId, {
            $pull: { friendsId: payload.userId },
        }).orFail();
    };
}
export const friendService = Object.freeze(new FriendService());
