import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const ProductCard = ({ title, description, price, imageUrl }: ProductCardProps) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
    <img 
      src={imageUrl} 
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-green-400 font-semibold">{price}</span>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          Learn More
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </div>
);