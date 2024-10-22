import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

const EditRecipe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe>({
    id: 0,
    title: '',
    description: '',
    ingredients: [''],
    instructions: ['']
  });

  useEffect(() => {
    // TODO: Fetch recipe details from API
    const dummyRecipe: Recipe = {
      id: 1,
      title: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta dish',
      ingredients: ['200g spaghetti', '100g pancetta', '2 large eggs', '50g pecorino cheese', 'Black pepper'],
      instructions: [
        'Cook spaghetti in salted water until al dente',
        'Fry pancetta until crispy',
        'Mix eggs, cheese, and pepper in a bowl',
        'Toss hot pasta with pancetta and egg mixture',
        'Serve immediately with extra cheese and pepper'
      ]
    };
    setRecipe(dummyRecipe);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement update recipe logic
    console.log('Update Recipe:', recipe);
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  const addInstruction = () => {
    setRecipe({ ...recipe, instructions: [...recipe.instructions, ''] });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={recipe.title}
            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            value={recipe.description}
            onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
            rows={3}
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => {
                const newIngredients = [...recipe.ingredients];
                newIngredients[index] = e.target.value;
                setRecipe({ ...recipe, ingredients: newIngredients });
              }}
              className="w-full px-3 py-2 border rounded-lg mb-2"
              required
            />
          ))}
          <button type="button" onClick={addIngredient} className="text-indigo-600 hover:text-indigo-800">
            + Add Ingredient
          </button>
        </div>
        <div>
          <label className="block mb-1">Instructions</label>
          {recipe.instructions.map((instruction, index) => (
            <textarea
              key={index}
              value={instruction}
              onChange={(e) => {
                const newInstructions = [...recipe.instructions];
                newInstructions[index] = e.target.value;
                setRecipe({ ...recipe, instructions: newInstructions });
              }}
              className="w-full px-3 py-2 border rounded-lg mb-2"
              rows={2}
              required
            ></textarea>
          ))}
          <button type="button" onClick={addInstruction} className="text-indigo-600 hover:text-indigo-800">
            + Add Instruction
          </button>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;