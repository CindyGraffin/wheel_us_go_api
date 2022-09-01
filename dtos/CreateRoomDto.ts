import { Room } from "../types/Room";

export interface createRoomDto extends Omit<Room, "aperoWheel.launched" | "aperoWheel.person">{

}