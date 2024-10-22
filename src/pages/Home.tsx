import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to RecipeShare</h1>
      <p className="text-xl mb-8">Discover, share, and save delicious recipes from around the world!</p>
      <div className="space-x-4">
        <Link to="/recipes" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
          Browse Recipes
        </Link>
        <Link to="/recipes/create" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Share a Recipe
        </Link>
      </div>
    </div>
  );
};

export default Home;