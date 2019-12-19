// import

// library
import React from 'react';

// styles
import 'react-id-swiper/lib/';

// scripts
import generateData from './swiperAnimation/data';
import Slider from './swiperAnimation/slider';

export default function LandingCarousel() {
  return (
    <div>
      <Slider items={generateData()} />
    </div>
  );
}
