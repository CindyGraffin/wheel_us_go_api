import mongoose from "mongoose";
import { Dto } from "./dto";

type Ingredients = {
    quantity: number;
    denomination: string
}


export interface RecipesDto extends Dto{
    _id: mongoose.Schema.Types.ObjectId;
    title: string;
    times: number;
    difficulty: string
    ingredients: Ingredients[]
    instruction: string[]
    datePublication: Date
}

