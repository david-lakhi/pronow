import React from 'react';
import { Star, Shield, Award, Globe } from 'lucide-react';

const GlobalTrust = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "ProNow transformed how I manage my business. The booking system is incredible!",
      rating: 5,
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Mike Chen",
      role: "Freelance Developer",
      content: "Best platform for finding tech projects. The payment system is super reliable.",
      rating: 5,
      image: "https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Emma Davis",
      role: "Customer",
      content: "Found an amazing tutor for my kids in minutes. The app is so easy to use!",
      rating: 5,
      image: "https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const stats = [
    { icon: <Globe className="h-8 w-8" />, value: "500K+", label: "Global Users" },
    { icon: <Star className="h-8 w-8" />, value: "4.8", label: "Average Rating" },
    { icon: <Shield className="h-8 w-8" />, value: "100%", label: "Secure Payments" },
    { icon: <Award className="h-8 w-8" />, value: "99.9%", label: "Uptime" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Trusted <span className="text-teal-600">Globally</span>
          </h2>
          <p className="text-xl text-slate-600">
            Join thousands of satisfied users worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800">What Our Users Say</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                        <span className="text-slate-500 text-sm">•</span>
                        <span className="text-slate-500 text-sm">{testimonial.role}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-600 italic">"{testimonial.content}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800">Trust & Security</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl">
                  <div className="text-teal-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="text-green-800 font-medium">Money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                <Star className="h-6 w-6 text-blue-600" />
                <span className="text-blue-800 font-medium">Verified professionals</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                <Award className="h-6 w-6 text-orange-600" />
                <span className="text-orange-800 font-medium">Quality assurance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTrust;