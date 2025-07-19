import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Download } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Security", href: "#" },
    { name: "Terms", href: "#" }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" }
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">ProNow</h3>
              <p className="text-slate-300 text-lg max-w-md">
                One app. Infinite services. Connect with trusted professionals worldwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Download Our App</h4>
              <div className="flex space-x-4">
                <button className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl transition-colors flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>App Store</span>
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl transition-colors flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="bg-slate-700 hover:bg-teal-600 p-3 rounded-xl transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="space-y-2">
              <h5 className="font-medium">Company</h5>
              <p className="text-slate-300 text-sm">
                Goa Services LLC<br />
                Martinsburg, WV, USA
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 ProNow by Goa Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;