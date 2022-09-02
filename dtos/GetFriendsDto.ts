import { User } from "../types/User";

export interface getFriendsDto extends Pick<User, "_id" | "firstname"| "lastname">{

}