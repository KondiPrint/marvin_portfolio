'use client';

import React, { useState, useRef, createRef } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    'absolute text-base-100 text-2xl bg-base-content origin-center h-full opacity-75 flex items-center justify-center px-1';

  const sliderControl = (isLeft) => (
    <button
      type='button'
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${
        isLeft
          ? '-left-7 rounded-tl-full rounded-bl-full'
          : '-right-7 rounded-tr-full rounded-br-full'
      }`}
      style={{ top: '0%' }}>
      <span role='img' aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
    <>
      <div className='p-10 flex justify-center items-center'>
        <div className='relative flex'>
          <div className='carousel'>
            {sliderControl(true)}
            {images.map((img, i) => (
              <div className='size-full carousel-item' key={i} ref={refs[i]}>
                <img src={img.src} className='size-full block' alt={`Slide ${i}`} />
              </div>
            ))}
            {sliderControl(false)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
