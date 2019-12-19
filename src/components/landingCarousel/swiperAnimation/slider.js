import React, { useState, useEffect, useCallback } from 'react';
import Swiper from './swiper';
import SlideItem from './slideItem';
import { Slider } from './styles';

export default ({ items }) => {
  const [swiper, updateSwiper] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [currentIndex, updateCurrentIndex] = useState(0);

  const params = {
    initialSlide: 3,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    getSwiper: updateSwiper,
  };

  const renderItem = useCallback(
    ({ idx, image }) => <SlideItem image={image} key={`slide_${idx}`} />,
    [],
  );

  const updateIndex = useCallback(() => updateCurrentIndex(swiper.realIndex), [
    swiper,
  ]);

  useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', updateIndex);
    }

    return () => {
      if (swiper !== null) {
        swiper.off('slideChange', updateIndex);
      }
    };
  }, [swiper, updateIndex]);

  return (
    <Slider>
      <Swiper params={params}>{items.map(renderItem)}</Swiper>
    </Slider>
  );
};
