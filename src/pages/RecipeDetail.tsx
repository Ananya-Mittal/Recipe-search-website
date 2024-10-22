import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

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
      ],
      image: 'https://source.unsplash.com/random/800x600?pasta'
    };
    setRecipe(dummyRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
      <p className="text-xl mb-6">{recipe.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Instructions</h3>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-8">
        <Link to={`/recipes/${id}/edit`} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 mr-4">
          Edit Recipe
        </Link>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
          Delete Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;