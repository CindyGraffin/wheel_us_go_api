import { RecipesModel } from "../models/RecipesModel";
import { RecipesDto } from "../dtos/recipes.dto";

export class RecipeService {
  addRecipe = async (recipe: RecipesDto): Promise<RecipesDto> => {
    const newRecipe = new RecipesModel(recipe);
    await newRecipe.save();
    return newRecipe;
  };

  getAllRecipes = async (): Promise<RecipesDto[]> => {
    const recipes = RecipesModel.find();
    return recipes;
  };

  getRecipe = async (id: string): Promise<RecipesDto> => {
    const recipe = await RecipesModel.findById(id).orFail();   
    return recipe;
  };

  deleteRecipeById = async (recipeId: string): Promise<void> => {
    await RecipesModel.deleteOne({
      recipeId: recipeId,
    });
  };
}
export const recipeService = Object.freeze(new RecipeService());