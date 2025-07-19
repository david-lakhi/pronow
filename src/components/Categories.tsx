import React, { useState } from 'react';
import { Home, BookOpen, Heart, Brain, Monitor, Code, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const categories = [
    { icon: <Home className="h-8 w-8" />, name: "Home Repair", count: "2,456 pros" },
    { icon: <BookOpen className="h-8 w-8" />, name: "Tutoring", count: "1,823 pros" },
    { icon: <Heart className="h-8 w-8" />, name: "Beauty & Wellness", count: "3,142 pros" },
    { icon: <Brain className="h-8 w-8" />, name: "Therapy", count: "956 pros" },
    { icon: <Monitor className="h-8 w-8" />, name: "Tech Support", count: "1,567 pros" },
    { icon: <Code className="h-8 w-8" />, name: "Digital Freelance", count: "4,231 pros" },
    { icon: <Stethoscope className="h-8 w-8" />, name: "Nursing", count: "892 pros" }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, categories.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Top <span className="text-teal-600">Categories</span>
          </h2>
          <p className="text-xl text-slate-600">
            Explore our most popular service categories
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {categories.map((category, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-3">
                  <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className="text-teal-600 mb-4 flex justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-slate-600">
                      {category.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" />
          </button>

          <button 
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6 text-slate-700" />
          </button>
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;