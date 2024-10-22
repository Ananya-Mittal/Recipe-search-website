import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // TODO: Fetch recipes from API
    const dummyRecipes: Recipe[] = [
      { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish', image: 'https://source.unsplash.com/random/800x600?pasta' },
      { id: 2, title: 'Chicken Tikka Masala', description: 'Flavorful Indian curry', image: 'https://source.unsplash.com/random/800x600?curry' },
      { id: 3, title: 'Caesar Salad', description: 'Fresh and crispy salad', image: 'https://source.unsplash.com/random/800x600?salad' },
    ];
    setRecipes(dummyRecipes);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;