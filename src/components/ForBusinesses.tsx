import React from 'react';
import { Calendar, Users, FileText, Star } from 'lucide-react';

const ForBusinesses = () => {
  const plans = [
    {
      name: "Bronze",
      price: "Free",
      features: ["Basic listing", "5 services", "Email support"]
    },
    {
      name: "Silver",
      price: "$19/month",
      features: ["Priority listing", "Unlimited services", "Chat support", "Analytics"]
    },
    {
      name: "Gold",
      price: "$49/month",
      features: ["Featured listing", "Team management", "24/7 support", "Advanced analytics", "Custom branding"]
    }
  ];

  return (
    <section id="for-businesses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                For <span className="text-teal-600">Freelancers</span> & <span className="text-orange-500">Businesses</span>
              </h2>
              <p className="text-xl text-slate-600">
                Digital appointments, freelance gigs & full storefront capabilities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Calendar className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Smart Scheduling</h3>
                  <p className="text-slate-600 text-sm">Automated booking system</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Team Management</h3>
                  <p className="text-slate-600 text-sm">Manage team members easily</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Invoice System</h3>
                  <p className="text-slate-600 text-sm">Professional invoicing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Review System</h3>
                  <p className="text-slate-600 text-sm">Build your reputation</p>
                </div>
              </div>
            </div>

            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
              Start Selling on ProNow
            </button>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 text-center">Choose Your Plan</h3>
            <div className="space-y-4">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-lg ${
                    index === 1 
                      ? 'border-teal-600 bg-teal-50 transform scale-105' 
                      : 'border-slate-200 bg-white hover:border-teal-300'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-semibold text-slate-800">{plan.name}</h4>
                    <span className="text-2xl font-bold text-teal-600">{plan.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;