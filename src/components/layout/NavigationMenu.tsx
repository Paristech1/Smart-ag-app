import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const NavigationMenu = ({ isOpen, onClose }: NavigationMenuProps) => (
  <div 
    className={`fixed inset-0 backdrop-blur-lg bg-black/40 transition-opacity ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className={`absolute left-0 top-0 bottom-0 w-64 bg-white/20 backdrop-blur-xl p-6 transition-transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
      >
        <X size={24} />
      </button>
      
      <nav className="mt-12">
        <ul className="space-y-6">
          {menuItems.map(item => (
            <li key={item.label}>
              <Link 
                to={item.href}
                className="text-white text-lg hover:text-green-400 transition-colors"
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);