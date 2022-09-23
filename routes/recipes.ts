import express from "express";import { RecipeController } from "../controllers/recipes";
;

const recipeController = new RecipeController();
const recipeRouter = express.Router();

recipeRouter.post('/createrecipe', recipeController.createRecipe)
recipeRouter.get('/:id', recipeController.getRecipeById)
recipeRouter.get('/', recipeController.getAllRecipes)

export {recipeRouter}