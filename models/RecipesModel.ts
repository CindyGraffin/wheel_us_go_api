import mongoose, { Schema } from "mongoose";
import { RecipesDto } from "../dtos/recipes.dto";

const RecipesSchema = new mongoose.Schema<RecipesDto>(
  {
    title: { type: String, required: true },
    times: { type: Number, required: true },
    difficulty: { type: String, required: true },
    ingredients: {
      quantity: { type: Number },
      denomination: { type: String, required: true },
    },
    instruction: { type: [String], required: true },
  },
  { timestamps: true }
);

const RecipesModel = mongoose.model<RecipesDto>("Recipes", RecipesSchema);
export { RecipesModel };
