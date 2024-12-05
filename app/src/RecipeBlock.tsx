

export function RecipeBlock({ recipe }) {
    return <div>
        <h3>{recipe.name}</h3>
        <ul>
            {recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
        <p>{recipe.description}</p>
    </div>
}