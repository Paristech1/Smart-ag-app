import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    title: "Soil Monitor Pro",
    description: "Precision engineered soil monitoring system crafted with advanced sensor technology. Delivers real-time nutrient tracking with unparalleled accuracy.",
    price: "$299",
    imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800",
    stats: {
      accuracy: "99.9%",
      batteryLife: "2 Years",
      range: "500m"
    }
  },
  {
    id: 2,
    title: "Grow Hardware Kit",
    description: "Meticulously designed hardware ensemble for the discerning agriculturist. Features premium grade sensors and elegant monitoring interfaces.",
    price: "$499",
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    stats: {
      coverage: "2 Acres",
      sensors: "12 Units",
      lifespan: "5 Years"
    }
  },
  {
    id: 3,
    title: "Smart Assistant Hub",
    description: "The epitome of agricultural intelligence. Crafted with precision AI algorithms to deliver unprecedented farming insights.",
    price: "$399",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    stats: {
      processing: "Real-time",
      compatibility: "Universal",
      updates: "Lifetime"
    }
  }
];

export const ProductsPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-white mb-4">Precision Agriculture</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our curated collection of sophisticated agricultural monitoring solutions,
            crafted for the modern farmer who demands excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {products.map(product => (
            <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                </div>
                
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-light text-white mb-4">{product.title}</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">{product.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-green-400 font-light text-lg">{value}</div>
                        <div className="text-gray-500 text-sm capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-white">{product.price}</span>
                    <button 
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};