import React from 'react';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

import bg1 from '../assets/bg1.jpeg';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';
import bg5 from '../assets/bg5.png';
import bg6 from '../assets/bg6.jpg';
import bg7 from '../assets/bg7.jpg';
import bg8 from '../assets/bg8.jpg';
import bg9 from '../assets/bg9.jpg';
import bg10 from '../assets/bg10.jpg';

const backgroundImages = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10
];

function HeroContent(props) {
  const { data } = props;
  const imageIndex = Math.min(Math.max(0, data), backgroundImages.length - 1);

  const backgroundImgStyle = {
    backgroundImage: `url(${backgroundImages[imageIndex]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="text-white md:pb-8 h-[90vh]" style={backgroundImgStyle}>
      {/* Content goes here */}
    </div>
  );
}

HeroContent.propTypes = {
  data: PropTypes.number.isRequired, // Ensure that data is a required number prop
};

export default HeroContent;
