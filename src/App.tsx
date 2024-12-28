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