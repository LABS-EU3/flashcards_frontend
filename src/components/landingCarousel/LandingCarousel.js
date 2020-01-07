// Import

// Libraries
import React from 'react';

// Styles
import { SliderContainer } from './swiperAnimation/styles';

// Scripts
import generateData from './swiperAnimation/data';
import Slider from './swiperAnimation/slider';

export default function LandingCarousel() {
  return (
    <SliderContainer>
      <Slider items={generateData()} />
    </SliderContainer>
  );
}
