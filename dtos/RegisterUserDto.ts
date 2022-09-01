import { User } from "../types/User";

export interface RegisterUserDto extends Omit<User, "friends" | "group" | "userImg" | "birthday" | "outingPart" | "outingCre">{

}