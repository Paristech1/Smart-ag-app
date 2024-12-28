import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { NavigationMenu } from './NavigationMenu';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { items } = useCart();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-white hover:text-green-400 transition-colors"
          >
            <Menu size={24} />
          </button>
          
          <Link to="/" className="text-white font-semibold">
            Smart Agricultural Assistant
          </Link>
          
          <button 
            onClick={() => navigate('/cart')}
            className="text-white hover:text-green-400 transition-colors relative"
          >
            <ShoppingCart size={24} />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </div>
      
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}