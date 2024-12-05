import { RecipeService } from "./RecipeService"

export function List() {
    return <div>
        {RecipeService.loadRecipes().map(recipe => <div>
            <h3>{recipe.name}</h3>
            <ul>
                {recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}
            </ul>
            <p>{recipe.description}</p>
        </div>)}
    </div>
}