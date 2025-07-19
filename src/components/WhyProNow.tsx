import React from 'react';
import { Smartphone, MessageSquare, Shield, Globe } from 'lucide-react';

const WhyProNow = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "One app to run your entire business",
      description: "Sell online, in-person & on the go with our comprehensive platform"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Built-in booking system, live chat & video calls",
      description: "Everything you need to connect with customers and manage appointments"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Upfront payments & money-back guarantee",
      description: "Secure transactions with full protection for both parties"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Serve local customers & global clients",
      description: "Access 500+ service categories worldwide with local and remote options"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Why Choose <span className="text-teal-600">ProNow?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The most comprehensive platform for service providers and customers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-teal-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProNow;