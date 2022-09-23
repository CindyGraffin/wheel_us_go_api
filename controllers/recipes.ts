import { Request, Response, NextFunction } from "express";
import { recipeService } from './../service/recipeService';


export class RecipeController{

    private service = recipeService;
    createRecipe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const newRecipe = await this.service.addRecipe(req.body);
            res.status(200).json(newRecipe)
        } catch (error) {
            next(error);
        }
    }

    getRecipeById = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const recipe = await this.service.getRecipe(req.params.id);
            res.status(200).json(recipe)
        } catch (error) {
            next(error)
        }
    }

    getAllRecipes = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const users = await this.service.getAllRecipes();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    };

    

}

