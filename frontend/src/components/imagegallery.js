import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import local images
import cricket from '../images/cricket.jpg';
import tableTennis from '../images/tableTennis.jpg';
import esports from '../images/esports.jpg';
import badminton from '../images/badminton.jpg';

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: cricket,  // Use imported image
      alt: 'Cricket',
      description: 'Cricket Tournament',
    },
    {
      id: 2,
      src: tableTennis,  // Use imported image
      alt: 'Table Tennis',
      description: 'Table Tennis Competition',
    },
    {
      id: 3,
      src: esports,  // Use imported image
      alt: 'Esports',
      description: 'Esports Battle',
    },
    {
      id: 4,
      src: badminton,  // Use imported image
      alt: 'Badminton',
      description: 'Badminton Championships',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds delay for each slide
    arrows: false,
  };

  return (
    <div className="p-6">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center justify-center">
            <div className="overflow-hidden rounded-md shadow-md w-full max-w-md mx-auto">
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
            </div>
            <p className="text-center mt-2 text-lg font-semibold">{image.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
