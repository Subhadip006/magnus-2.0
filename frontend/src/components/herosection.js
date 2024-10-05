// src/components/HeroSection.js
import React from 'react';
import NoticeBoard from './noticeboard';


const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Description on the left */}
      <div className="flex-1 bg-gray-100 p-6 rounded-md mb-4 md:mb-0 md:mr-4 md:w-[70%]">
        <h1 className="text-4xl font-bold">Welcome to Magnus 2.0</h1>
        <p className="mt-2">
          Join us for an exciting tournament experience! Whether you're a participant or a spectator, Magnus 2.0 promises fun and competition.
        </p>
      </div>

      {/* Notice Board on the right */}
      <div className="flex-1 md:w-[30%]">
        <NoticeBoard />
      </div>

      
    </div>
  );
};

export default HeroSection;
