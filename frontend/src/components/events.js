// src/components/Events.js
import React from 'react';
import Slider from 'react-slick';
import tableTennisImage from '../images/tableTennisLogo.png';
import carromImage from '../images/carrom logo.jpeg';
import bgmiImage from '../images/BGMI logo.jpeg';
import badmintonImage from '../images/badmintionlogo.jpeg';
import chessImage from '../images/chess logo.jpeg';
import volleyballImage from '../images/volleyball logo.jpeg';
import footballImage from '../images/football logo.jpeg';
import cricketImage from '../images/cricket logo.jpeg';

const Events = () => {
  const sports = [
    {
      id: 1,
      name: 'Table Tennis',
      image: tableTennisImage,
      venue: 'Common Hall',
      date: '2024-10-20',
      link: 'https://example.com/table-tennis', // Update with actual link
    },
    {
      id: 2,
      name: 'Carrom',
      image: carromImage,
      venue: 'Common Hall',
      date: '2024-10-20',
      link: 'https://example.com/carrom', // Update with actual link
    },
    {
      id: 3,
      name: 'BGMI',
      image: bgmiImage,
      venue: 'Online',
      date: '2024-10-20',
      link: 'https://example.com/bgmi', // Update with actual link
    },
    {
      id: 4,
      name: 'Badminton',
      image: badmintonImage,
      venue: 'Common Hall',
      date: '2024-10-20',
      link: 'https://example.com/badminton', // Update with actual link
    },
    {
      id: 5,
      name: 'Chess',
      image: chessImage,
      venue: 'Common Hall',
      date: '2024-10-20',
      link: 'https://example.com/chess', // Update with actual link
    },
    {
      id: 6,
      name: 'Volleyball',
      image: volleyballImage,
      venue: 'Common Hall',
      date: '2024-10-20',
      link: 'https://example.com/volleyball', // Update with actual link
    },
    {
      id: 7,
      name: 'Football',
      image: footballImage,
      venue: 'Football Ground',
      date: '2024-10-20',
      link: 'https://example.com/football', // Update with actual link
    },
    {
      id: 8,
      name: 'Cricket',
      image: cricketImage,
      venue: 'Cricket Field',
      date: '2024-10-20',
      link: 'https://example.com/cricket', // Update with actual link
    },
  ];

  // Settings for React Slick Slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time on mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds delay
    arrows: false, // Hide arrows on mobile
  };

  return (
    <section id="events" className="bg-white p-6 rounded-md shadow-md mb-4">
      <h2 className="text-2xl font-bold text-center mb-6">Our Events</h2>

      {/* Grid Layout for Medium and Larger Screens */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sports.map((sport) => (
          <a key={sport.id} href={sport.link} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <img
                src={sport.image}
                alt={sport.name}
                className="w-32 h-32 object-cover mb-4 rounded-full" // Make image rounded
              />
              <h3 className="text-xl font-semibold">{sport.name} - Logo</h3>
              <p className="text-sm text-gray-600">Venue: {sport.venue}</p>
              <p className="text-sm text-gray-600">Date: {sport.date}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Slider for Mobile Screens */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {sports.map((sport) => (
            <a key={sport.id} href={sport.link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-32 h-32 object-cover mb-4 rounded-full" // Make image rounded
                  />
                  <h3 className="text-xl font-semibold text-center">{sport.name} - Logo</h3>
                  <p className="text-sm text-gray-600">Venue: {sport.venue}</p>
                  <p className="text-sm text-gray-600">Date: {sport.date}</p>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Events;
