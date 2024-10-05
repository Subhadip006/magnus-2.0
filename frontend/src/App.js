// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import ImageGallery from './components/imagegallery';
import Events from './components/events'; 
import Rules from './components/rules';
import About from './components/about';
import Members from './components/members';
import Footer from "./components/footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        {/* Hero Section */}
        <HeroSection />

        {/* Full-width Image Gallery */}
        <section id="image-gallery" className="w-full p-4">
          <h2 className="text-2xl font-bold text-center mb-4">Gallery</h2>
          <p className="text-center mb-4">Explore our vibrant activities and events through these images.</p>
          <ImageGallery />
        </section>

        {/* Events Section */}
        <Events />

        {/* Rules Section */}
        <Rules /> {/* Include the Rules section here */}

        {/* About Section */}
        <About /> {/* Include the About section here */}

        {/* Members Section */}
        <Members /> {/* Include the Members section here */}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
