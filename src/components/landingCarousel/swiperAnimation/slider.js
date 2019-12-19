import React, { useState, useEffect, useCallback } from 'react';
import Swiper from './swiper';
import SlideItem from './slideItem';

export default ({ items }) => {
  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Slides current index
  const [currentIndex, updateCurrentIndex] = useState(0);
  // Params definition
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

  // Manipulate swiper from outside
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const renderItem = useCallback(
    ({ idx, color, content }) => (
      <SlideItem color={color} content={content} key={`slide_${idx}`} />
    ),
    [],
  );

  const updateIndex = useCallback(() => updateCurrentIndex(swiper.realIndex), [
    swiper,
  ]);

  // Add eventlisteners for swiper after initializing
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
    <div>
      <Swiper params={params}>{items.map(renderItem)}</Swiper>
      <div my={5} justifyContent="center" alignItems="center">
        <button type="button" onClick={goPrev} m={0} mr={4} bg="blue.4">
          Prev
        </button>
        <button type="button" onClick={goNext} bg="red.4">
          Next
        </button>
      </div>
      <p>
        Current slide index is <p>{currentIndex}</p>
      </p>
    </div>
  );
};
