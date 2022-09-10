import { Dto } from "./dto";

export interface MessageDto extends Dto {
    conversationId: string;
    sender: string;
    text: string;
}