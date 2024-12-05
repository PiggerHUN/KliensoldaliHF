import { Recipe } from './Recipe';

export class RecipeService {
    static saveRecipe(recipe: Recipe) {
        const recipes = RecipeService.loadRecipes();
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    static loadRecipes(): Recipe[] {
        const recipesJson = localStorage.getItem('recipes');
        if (recipesJson) {
            return JSON.parse(recipesJson).map((recipe: any) => new Recipe(recipe.id, recipe.name, recipe.ingredients, recipe.description));
        }
        return [];
    }
}