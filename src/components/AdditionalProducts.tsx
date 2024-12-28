import React from 'react';

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Smart Irrigation System",
    imageUrl: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=400",
    price: "$299"
  },
  {
    id: 2,
    title: "Soil Analyzer",
    imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=400",
    price: "$199"
  },
  {
    id: 3,
    title: "Weather Station",
    imageUrl: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&q=80&w=400",
    price: "$249"
  }
];

export const AdditionalProducts = () => (
  <div>
    <h3 className="text-white text-lg font-bold mb-4">Related Products</h3>
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-800 rounded-xl p-3">
          <img 
            src={product.imageUrl} 
            alt={product.title}
            className="w-full h-24 object-cover rounded-lg mb-2"
          />
          <h4 className="text-white text-sm font-medium mb-1">{product.title}</h4>
          <span className="text-cyan-300 text-sm font-bold">{product.price}</span>
        </div>
      ))}
    </div>
  </div>
);