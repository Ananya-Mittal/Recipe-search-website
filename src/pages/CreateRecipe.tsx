import React, { useState } from 'react';

const CreateRecipe: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement create recipe logic
    console.log('Create Recipe:', { title, description, ingredients, instructions });
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            rows={3}
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index] = e.target.value;
                setIngredients(newIngredients);
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
          {instructions.map((instruction, index) => (
            <textarea
              key={index}
              value={instruction}
              onChange={(e) => {
                const newInstructions = [...instructions];
                newInstructions[index] = e.target.value;
                setInstructions(newInstructions);
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
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;