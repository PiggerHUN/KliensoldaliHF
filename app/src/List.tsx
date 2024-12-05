import { RecipeService } from "./RecipeService"
import { RecipeBlock } from "./RecipeBlock"

export function List(filter) {
    return <div>
        {RecipeService.loadRecipes().map(recipe =>
            //recipe.name.toLowerCase().includes(filter ?? '') ?
            //    <RecipeBlock recipe={recipe} /> : null)}
            <RecipeBlock recipe={recipe} />)}
    </div>
}