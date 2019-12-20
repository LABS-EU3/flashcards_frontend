// import

// library
import React from 'react';

// styles
import 'react-id-swiper/lib/';
import { SliderContainer } from './swiperAnimation/styles';

// scripts
import generateData from './swiperAnimation/data';
import Slider from './swiperAnimation/slider';

export default function LandingCarousel() {
  return (
    <SliderContainer>
      <Slider items={generateData()} />
    </SliderContainer>
  );
}
