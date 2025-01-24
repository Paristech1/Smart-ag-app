# Smart Agricultural Assistant Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [Project Structure](#project-structure)
4. [Component Documentation](#component-documentation)
5. [State Management](#state-management)
6. [Deployment](#deployment)

## Project Overview
A high-end e-commerce platform for agricultural monitoring solutions, featuring a sophisticated design with earthy tones and luxury brand aesthetics.

## Technical Stack
- React 18.3.1
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (for icons)
- Vite (build tool)

## Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── NavigationMenu.tsx
│   ├── home/
│   │   └── HeroSection.tsx
│   └── products/
│       └── ProductCard.tsx
├── context/
│   └── CartContext.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   └── CartPage.tsx
└── main.tsx
```

## Component Documentation

### App.tsx
```tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
```

### CartContext.tsx
```tsx
import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  total: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(items.filter(item => item.id !== productId));
  };

  const total = items
    .reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
```

### ProductsPage.tsx
```tsx
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
                      onClick={() => addToCart(product)}
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
```

### CartPage.tsx
```tsx
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
```

### Header.tsx
```tsx
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
};
```

## State Management
The application uses React Context for global state management, specifically for handling the shopping cart functionality. The CartContext provides:

- Cart items management
- Add to cart functionality
- Remove from cart functionality
- Total price calculation

## Deployment
The application is deployed using Netlify with automatic deployments from the main branch.

### Future Improvements
1. Add authentication
2. Implement checkout process
3. Add product search and filtering
4. Implement product categories
5. Add user reviews and ratings
6. Implement wishlist functionality
7. Add order history
8. Implement product recommendations
