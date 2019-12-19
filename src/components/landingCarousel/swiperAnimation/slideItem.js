import React from 'react';
import importAll from '../../../utils/importAll';

const images = importAll(
  require.context('../../../assets/appimages', false, /\.(png|jpe?g|svg)$/),
);

const divStyle = {
  maxHeight: '15em',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  className: 'swiper-slide',
};

export default ({ image }) => (
  <div style={divStyle}>
    <img src={images[image]} alt="images of the app" />
  </div>
);
