// src/components/Members.js
import React from 'react';
import Slider from 'react-slick';

const Members = () => {
  const members = [
    {
      id: 1,
      name: 'Person 1',
      position: 'Tournament Coordinator',
      phone: '+91 999999999',
      image: 'https://via.placeholder.com/150.png?text=Alice',
    },
    {
      id: 2,
      name: 'Person 2',
      position: 'Events Manager',
      phone: '+91 99999999',
      image: 'https://via.placeholder.com/150.png?text=Bob',
    },
    {
      id: 3,
      name: 'Person 3',
      position: 'Logistics Head',
      phone: '+91 9999999999',
      image: 'https://via.placeholder.com/150.png?text=Charlie',
    },
    {
      id: 4,
      name: 'person 4',
      position: 'Sports head',
      phone: '+91 999999999',
      image: 'https://via.placeholder.com/150.png?text=Diana',
    },
    {
      id: 5,
      name: 'Person 5',
      position: 'Cricket head',
      phone: '+91 99999999999',
      image: 'https://via.placeholder.com/150.png?text=Ethan',
    },
    {
      id: 6,
      name: 'Person 6',
      position: 'Hospitality Manager',
      phone: '+91 9999999999',
      image: 'https://via.placeholder.com/150.png?text=Fiona',
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
    <section id="members" className="bg-white p-6 rounded-md shadow-md mb-4">
      <h2 className="text-2xl font-bold text-center mb-6">Our Team Members</h2>
      <p className="text-center mb-6">Meet the dedicated individuals behind Magnus 2.0!</p>

      {/* Grid Layout for Medium and Larger Screens */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
            <p className="text-gray-600">{member.phone}</p>
          </div>
        ))}
      </div>

      {/* Slider for Mobile Screens */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.position}</p>
                <p className="text-gray-600 text-center">{member.phone}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Members;
