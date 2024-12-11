import { Recipe } from './Recipe';

export class RecipeService {
    // Save a recipe to local storage
    static saveRecipe(recipe: Recipe) {
        const recipes = RecipeService.loadRecipes();
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    // Load recipes from local storage
    static loadRecipes(): Recipe[] {
        const recipesJson = localStorage.getItem('recipes');
        if (recipesJson) {
            return JSON.parse(recipesJson).map((recipe: any) => new Recipe(recipe.id, recipe.name, recipe.ingredients, recipe.description));
        }
        return [];
    }

    // Delete a recipe from local storage by ID
    static deleteRecipe(id: number) {
        const recipes = RecipeService.loadRecipes();
        const newRecipes = recipes.filter(recipe => recipe.id !== id);
        localStorage.setItem('recipes', JSON.stringify(newRecipes));
    }
}