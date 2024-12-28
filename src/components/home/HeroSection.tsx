import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => (
  <section className="relative h-screen">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1920")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
    </div>
    
    <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Smart Agricultural Assistant
      </h1>
      <p className="text-xl text-gray-200 mb-8 max-w-2xl">
        Revolutionizing Farming with AI-Powered Tools
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
        Learn More
        <ArrowRight size={20} />
      </button>
    </div>
  </section>
);