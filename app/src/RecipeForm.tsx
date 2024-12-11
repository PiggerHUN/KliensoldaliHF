import { useState } from 'preact/hooks';
import { Recipe } from './Recipe';
import { RecipeService } from './RecipeService';
import { NavBar } from './NavBar';
import './RecipeForm.less';

export function RecipeForm() {
    // useState hooks to manage form input states
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');

    // Generate a random ID for the new recipe
    let id = Math.floor(Math.random() * 1000000);

    // Function to handle form submission and save the recipe
    const handleSave = () => {
        const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
        const newRecipe = new Recipe(id, name, ingredientsArray, description);
        RecipeService.saveRecipe(newRecipe);
        
        // Reset form inputs
        setName('');
        setIngredients('');
        setDescription('');
    };

    return (
        <div>
            <NavBar/>
            <h2>Új recept felvétele</h2>
            <form class="recipe-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div>
                    <label>Név:</label>
                    <input class="form-input" type="text" value={name} onInput={(e) => setName(e.currentTarget.value)} placeholder="Pl: Túrós bukta" />
                </div>
                <div>
                    <label>Hozzávalók: (vesszővel elválasztva)</label>
                    <input class="form-input" type="text" value={ingredients} onInput={(e) => setIngredients(e.currentTarget.value)} placeholder="Pl: alma, cukor, túró" />
                </div>
                <div>
                    <label>Leírás:</label>
                    <textarea class="form-input" value={description} onInput={(e) => setDescription(e.currentTarget.value)} />
                </div>
                <button type="submit">Mentés</button>
            </form>
        </div>
    );
}