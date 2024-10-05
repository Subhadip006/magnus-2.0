// src/components/About.js
import React from 'react';
import Banner from '../images/magnus banner.jpeg'

const About = () => {
  return (
    <section
      id="about"
      className="bg-white p-6 rounded-md shadow-md mb-4 hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold text-center mb-6">About Magnus 2.0</h2>
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* About Text */}
        <div className="md:w-2/3 md:pr-6">
          <p className="mb-4 text-gray-700">
            <strong>Magnus 2.0</strong> is our annual hostel tournament designed to foster camaraderie, competition, and sportsmanship among students. Featuring a diverse range of activities including cricket, table tennis, esports, badminton, carrom, chess, volleyball, and football, Magnus 2.0 caters to both traditional sports enthusiasts and modern gamers.
          </p>
          <p className="mb-4 text-gray-700">
            Our mission is to provide a platform where participants can showcase their skills, engage in healthy competition, and build lasting friendships. Whether you're a seasoned athlete or a casual player, there's something for everyone at Magnus 2.0.
          </p>
          <p className="text-gray-700">
            Join us for an unforgettable experience filled with excitement, strategy, and teamwork. Let's make Magnus 2.0 a grand success together!
          </p>
          {/* Optional Call-to-Action Button */}
          {/* <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button> */}
        </div>

        {/* About Image */}
        <div className="mb-3 md:w-1/3 mt-6 md:mt-0">
          <img
            src={Banner}
            alt="About Magnus 2.0"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
