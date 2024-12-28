import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
  const { items, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-light text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">Discover our premium agricultural solutions.</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-8 py-3 rounded-full transition-colors duration-300"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-light text-white mb-8">Shopping Cart</h1>
        
        <div className="space-y-6 mb-8">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 flex items-center gap-4"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-20 h-20 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="text-white font-light">{item.title}</h3>
                <div className="flex items-center gap-4">
                  <p className="text-green-400">{item.price}</p>
                  <span className="text-gray-400">×</span>
                  <p className="text-gray-400">{item.quantity}</p>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400">Total</span>
            <span className="text-2xl font-light text-white">{total}</span>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full transition-colors duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};