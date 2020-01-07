// Import

// Libraries
import React from 'react';

// Utils
import importAll from '../../../utils/importAll';

// Styles
import { SlideItem } from './styles';

const images = importAll(
  require.context('../../../assets/appimages', false, /\.(png|jpe?g|svg)$/),
);

export default ({ image }) => (
  <SlideItem className="swiper-slide">
    <img src={images[image]} alt="images of the app" />
  </SlideItem>
);
