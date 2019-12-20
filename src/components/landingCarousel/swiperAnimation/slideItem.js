import React from 'react';
import importAll from '../../../utils/importAll';

import { SlideItem } from './styles';

const images = importAll(
  require.context('../../../assets/appimages', false, /\.(png|jpe?g|svg)$/),
);

export default ({ image }) => (
  <SlideItem className="swiper-slide">
    <img src={images[image]} alt="images of the app" />
  </SlideItem>
);
