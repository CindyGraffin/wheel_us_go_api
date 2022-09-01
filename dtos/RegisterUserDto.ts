import { User } from "../types/User";

export interface registerUserDto extends Omit<User, "friends" | "group" | "userImg" | "birthday" | "outingPart" | "outingCre">{

}