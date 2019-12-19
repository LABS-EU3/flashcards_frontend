import React, { useState, useEffect, useCallback } from 'react';
import Swiper from './swiper';
import SlideItem from './slideItem';

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
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    getSwiper: updateSwiper, // Get swiper instance callback
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

  const parentDiv = {
    display: 'flex',
    flexDirection: 'column',
    margin: '1em 0em 1em 0em',
    width: '50%',
    overflow: 'hidden',
  };

  return (
    <div style={parentDiv}>
      <Swiper params={params}>{items.map(renderItem)}</Swiper>
    </div>
  );
};
