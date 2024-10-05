// src/components/Rules.js
import React from 'react';
import Slider from 'react-slick';

const Rules = () => {
  const sportsRules = {
    "Table Tennis": [
      "A match is played best of 5 or 7 games.",
      "Players must serve the ball behind the end line.",
      "The ball must bounce on your side before crossing the net."
    ],
    "Carrom": [
      "Players take turns to strike the carrom coins.",
      "You must pocket the queen before the last coin.",
      "No points are awarded for failing to pocket a coin."
    ],
    "Badminton": [
      "A match can be played in singles or doubles.",
      "Players must serve underhand, below the waist.",
      "The shuttlecock must land within the opponent's court."
    ],
    "Cricket": [
      "Each team has 11 players, with 11 overs per inning.",
      "Runs are scored by running between the wickets.",
      "A player is out if the ball hits the wickets or is caught."
    ],
    "Chess": [
      "The game is played on an 8x8 grid.",
      "The objective is to checkmate the opponent's king.",
      "Each piece moves in specific ways."
    ],
    "Volleyball": [
      "Each team has 6 players.",
      "The ball must be hit over the net within 3 touches.",
      "Points are scored when the opposing team fails to return the ball."
    ],
    "Football": [
      "A match is played between two teams of 11 players.",
      "Goals are scored by getting the ball into the opponent's net.",
      "Players cannot use their hands except for the goalkeeper."
    ],
    "BGMI": [
      "Players compete in teams to be the last one standing.",
      "Looting weapons and supplies is essential for survival.",
      "Teamwork and strategy are crucial for victory."
    ]
  };

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
    <section id="rules" className="bg-gray-100 p-6 rounded-md shadow-md mb-4">
      <h2 className="text-2xl font-bold text-center mb-6">Rules and Regulations</h2>
      <p className="text-center mb-6">Ensure fair play and enjoy the competition!</p>

      {/* Grid Layout for Medium and Larger Screens */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.keys(sportsRules).map((sport) => (
          <div
            key={sport}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{sport}</h3>
            <ul className="list-disc pl-4 text-gray-700">
              {sportsRules[sport].map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Slider for Mobile Screens */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {Object.keys(sportsRules).map((sport) => (
            <div key={sport} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-center">{sport}</h3>
                <ul className="list-disc pl-4 text-gray-700">
                  {sportsRules[sport].map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Rules;
