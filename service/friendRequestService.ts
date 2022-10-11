import { FriendRequestDto } from "../dtos/friendRequest.dto";
import { FriendRequestModel } from "../models/FriendRequestModel";

export class FriendRequestService {
    
    CreateFriendRequest =  async(senderId: string, receiverId: string, friendStatus: boolean): Promise<FriendRequestDto> => {
        const newFriendRequest = new FriendRequestModel({
            senderId, 
            receiverId,
            friendStatus
        })
        await newFriendRequest.save()
        return newFriendRequest;
    }

}
export const friendRequestService = Object.freeze(new FriendRequestService());