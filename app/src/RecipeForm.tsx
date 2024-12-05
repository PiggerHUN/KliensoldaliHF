import { useState } from 'preact/hooks';
import { Recipe, RecipeService } from './RecipeService';
import { NavBar } from './NavBar';

export function RecipeForm({setPage}) {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
        const newRecipe = new Recipe(name, ingredientsArray, description);
        RecipeService.saveRecipe(newRecipe);
        // Clear the form
        setName('');
        setIngredients('');
        setDescription('');
    };

    return (
        <div>
            <NavBar setPage={setPage}/>
            <h2>Új recept felvétele</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div>
                    <label>Név:</label>
                    <input type="text" value={name} onInput={(e) => setName(e.currentTarget.value)} />
                </div>
                <div>
                    <label>Hozzávalók: (vesszővel elválasztva)</label>
                    <input type="text" value={ingredients} onInput={(e) => setIngredients(e.currentTarget.value)} />
                </div>
                <div>
                    <label>Leírás:</label>
                    <textarea value={description} onInput={(e) => setDescription(e.currentTarget.value)} />
                </div>
                <button type="submit">Mentés</button>
            </form>
        </div>
    );
}