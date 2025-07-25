import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-slate-800">ProNow</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-700 hover:text-teal-600 transition-colors">Home</a>
              <a href="#how-it-works" className="text-slate-700 hover:text-teal-600 transition-colors">How It Works</a>
              <a href="#for-businesses" className="text-slate-700 hover:text-teal-600 transition-colors">For Businesses</a>
              <a href="#categories" className="text-slate-700 hover:text-teal-600 transition-colors">Categories</a>
              <a href="#contact" className="text-slate-700 hover:text-teal-600 transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-slate-700">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">+1 (571) 286-6843‑</span>
            </div>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Home</a>
              <a href="#how-it-works" className="block px-3 py-2 text-slate-700 hover:text-teal-600">How It Works</a>
              <a href="#for-businesses" className="block px-3 py-2 text-slate-700 hover:text-teal-600">For Businesses</a>
              <a href="#categories" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Categories</a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-teal-600">Contact</a>
              <div className="px-3 py-2">
                <div className="flex items-center text-slate-700 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">+1 (571) 286-6843</span>
                </div>
                <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;