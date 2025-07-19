import React from 'react';
import { Video, Clock, Zap } from 'lucide-react';

const InstantVideoGig = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                New Feature
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                <span className="text-teal-600">Instant Video Gig</span>
              </h2>
              <p className="text-xl text-slate-600">
                Video call a pro instantly for quick help — from fixing a leak to debugging code.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Video className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg">Instant Connection</h3>
                  <p className="text-slate-600">Connect with experts in seconds, no scheduling required</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg">Quick Solutions</h3>
                  <p className="text-slate-600">Get help fast for urgent problems and quick questions</p>
                </div>
              </div>
            </div>

            <button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg">
              Try Video Gig Now
            </button>
          </div>

          <div className="lg:pl-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl p-6">
                  <img 
                    src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                    alt="Video call interface"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="mt-4 flex items-center justify-between text-white">
                    <div>
                      <p className="font-medium">John - Plumber</p>
                      <p className="text-sm opacity-75">Available now</p>
                    </div>
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-teal-600">$2.99/min</p>
                  <p className="text-sm text-slate-600">Starting price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantVideoGig;