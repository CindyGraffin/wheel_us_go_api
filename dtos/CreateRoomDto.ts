import { Room } from "../types/Room";

export interface CreateRoomDto extends Omit<Room, "aperoWheel.launched" | "aperoWheel.person">{

}