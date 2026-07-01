import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="grain" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Doctors />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;