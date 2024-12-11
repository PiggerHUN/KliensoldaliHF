import './RecipeBlock.less';
import { Recipe } from './Recipe';

interface RecipeBlockProps {
    recipe: Recipe;
    onDelete: () => void;
}

// RecipeBlock component renders a recipe with a delete button
export function RecipeBlock({recipe, onDelete}: RecipeBlockProps) {
    return (
        <div className="RecipeBlock">
            <div className="RecipeHeader">
                <div className="name">{recipe.name}</div>
                <button className="delete-button" onClick={onDelete}>Delete</button>
            </div>
            <div className="ingredients">
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="description">
                <strong>Leírás:</strong>
                <p>{recipe.description}</p>
            </div>
        </div>
    );
}