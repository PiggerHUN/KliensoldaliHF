export class Recipe {
    name: string;
    ingredients: string[];
    description: string;

    constructor(name: string, ingredients: string[], description: string) {
        this.name = name;
        this.ingredients = ingredients;
        this.description = description;
    }
}

export class RecipeService {
    static saveRecipe(recipe: Recipe) {
        const recipes = RecipeService.loadRecipes();
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    static loadRecipes(): Recipe[] {
        const recipesJson = localStorage.getItem('recipes');
        if (recipesJson) {
            return JSON.parse(recipesJson).map((recipe: any) => new Recipe(recipe.name, recipe.ingredients, recipe.description));
        }
        return [];
    }
}