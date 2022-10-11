import mongoose from "mongoose";
import { Dto } from "./dto";

export interface FriendRequestDto extends Dto {
    senderID: mongoose.Schema.Types.ObjectId;
    sender: string ;
    receiver: string; 
    friendStatus: boolean;
}