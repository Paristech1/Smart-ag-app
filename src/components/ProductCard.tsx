import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const ProductCard = ({ title, description, price, imageUrl }: ProductCardProps) => (
  <div className="bg-gray-800 rounded-2xl p-6 mb-6">
    <img 
      src={imageUrl} 
      alt={title}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />
    <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-cyan-300 text-lg font-bold">{price}</span>
      <button className="bg-cyan-300 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2">
        Buy Now
        <ArrowRight size={16} />
      </button>
    </div>
  </div>
);