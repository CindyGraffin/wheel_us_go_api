import mongoose, { Schema } from "mongoose";
import { RecipesDto } from "../dtos/recipes.dto";

const RecipesSchema = new mongoose.Schema<RecipesDto>(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    title: { type: String },
    times: { type: Number },
    difficulty: { type: String },
    ingredients: { type: [String] },
    instruction: { type: [String] },
    datePublication: { type: Date },
  },
  { timestamps: true }
);

const RecipesModel = mongoose.model<RecipesDto>("Recipes", RecipesSchema);
export { RecipesModel };
