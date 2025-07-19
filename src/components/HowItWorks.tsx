import React from 'react';
import { Download, Search, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Download className="h-12 w-12" />,
      title: "Download the ProNow app",
      description: "Get started in seconds with our easy-to-use mobile app"
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "Find & book instantly or chat first",
      description: "Browse services, read reviews, and connect with the perfect pro"
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Pay safely, get work done, and review",
      description: "Secure payments, quality work, and honest feedback system"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            How It <span className="text-teal-600">Works</span>
          </h2>
          <p className="text-xl text-slate-600">
            Get the help you need in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full text-teal-600 mb-6">
                  {step.icon}
                </div>
                <div className="absolute -top-4 -right-4 bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-teal-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;