import React from 'react';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Beautiful <span className="text-teal-400">App Experience</span>
          </h2>
          <p className="text-xl text-slate-300">
            Clean, intuitive design that makes finding and booking services effortless
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            <div className="bg-slate-700 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Easy Browsing</h3>
              <p className="text-slate-300">Find services with smart filters and instant search</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-slate-300">Multiple payment options with full protection</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl p-4 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop" 
                  alt="ProNow app interface"
                  className="w-64 h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                4.8★
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-700 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Real-time Chat</h3>
              <p className="text-slate-300">Communicate directly with service providers</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
              <p className="text-slate-300">Monitor your service requests in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;