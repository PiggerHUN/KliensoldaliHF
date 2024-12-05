import { useState } from 'preact/hooks';
import { Recipe } from './Recipe';
import { RecipeService } from './RecipeService';
import { NavBar } from './NavBar';
import './RecipeForm.less';

export function RecipeForm({setPage}) {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');

    let id = Math.floor(Math.random() * 1000000);

    const handleSave = () => {
        const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
        const newRecipe = new Recipe(id, name, ingredientsArray, description);
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