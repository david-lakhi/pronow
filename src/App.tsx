import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyProNow from './components/WhyProNow';
import HowItWorks from './components/HowItWorks';
import ForBusinesses from './components/ForBusinesses';
import InstantVideoGig from './components/InstantVideoGig';
import Categories from './components/Categories';
import AppShowcase from './components/AppShowcase';
import GlobalTrust from './components/GlobalTrust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyProNow />
      <HowItWorks />
      <ForBusinesses />
      <InstantVideoGig />
      <Categories />
      <AppShowcase />
      <GlobalTrust />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;