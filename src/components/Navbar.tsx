import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed size={24} />
            <span className="text-xl font-bold">RecipeShare</span>
          </Link>
          <div className="space-x-4">
            <Link to="/recipes" className="hover:text-indigo-200">Recipes</Link>
            <Link to="/recipes/create" className="hover:text-indigo-200">Create Recipe</Link>
            <Link to="/login" className="hover:text-indigo-200">Login</Link>
            <Link to="/register" className="hover:text-indigo-200">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;