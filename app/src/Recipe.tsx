export class Recipe {
    id: number;
    name: string;
    ingredients: string[];
    description: string;

    // Constructor to initialize a Recipe object
    constructor(id: number, name: string, ingredients: string[], description: string) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.description = description;
    }
}