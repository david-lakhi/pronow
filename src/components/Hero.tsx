import React from 'react';
import { Download, Play, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
                One App.{' '}
                <span className="text-teal-600">Infinite Services.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Hire trusted local pros, global freelancers, and offer your own services — all in one super app.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600 transition-all flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download App
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex space-x-4">
                <img src="https://images.pexels.com/photos/4031820/pexels-photo-4031820.jpeg?auto=compress&cs=tinysrgb&w=120&h=40&fit=crop" alt="App Store" className="h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" />
                <img src="https://images.pexels.com/photos/4031820/pexels-photo-4031820.jpeg?auto=compress&cs=tinysrgb&w=120&h=40&fit=crop" alt="Google Play" className="h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center text-slate-700">
                <span className="font-medium">📞 +1‑800‑123‑4567</span>
              </div>
              <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-all flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Message Us on WhatsApp
              </button>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                  alt="People using ProNow app"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">500+ Services Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;