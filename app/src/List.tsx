import { RecipeService } from "./RecipeService"
import { RecipeBlock } from "./RecipeBlock"
import { useState, useEffect } from "preact/hooks"
import './List.less'

export function List({filter}: {filter?: string}) {
    // useState hooks to manage recipes and filtered recipes states
    const [recipes, setRecipes] = useState(RecipeService.loadRecipes());
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    // useEffect hook to load recipes on component mount
    useEffect(() => {
        const allRecipes = RecipeService.loadRecipes();
        setRecipes(allRecipes);
        if(!filter){
            setFilteredRecipes(allRecipes);
        }
    }, []);

    // useEffect hook to filter recipes based on the filter state
    useEffect(() => {
        if (filter) {
            const filtered = RecipeService.loadRecipes().filter(recipe =>
                recipe.name.toLowerCase().includes(filter) ||
                recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(filter)));
            setFilteredRecipes(filtered);
        }
        else {
            setFilteredRecipes(recipes);
        }
    }, [filter, recipes]);

    // Function to handle recipe deletion
    const handleDelete = (id: number) => {
        RecipeService.deleteRecipe(id);
        const updatedRecipes = RecipeService.loadRecipes();
        setRecipes(updatedRecipes);
        setFilteredRecipes(updatedRecipes);
    }

    return <div class="recipe-list">
        {filteredRecipes.map(recipe =>
            <div class="list-items" key={recipe.id}><RecipeBlock recipe={recipe} onDelete={() => handleDelete(recipe.id)} /></div>)}
    </div>

}