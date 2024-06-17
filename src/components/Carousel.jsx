// components/Carousel.js

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    {
      src: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
    },
    { src: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg' },
    { src: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg' },
    { src: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg' },
    { src: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='w-5/6 mx-auto' ref={carouselRef}>
        <button onClick={prevSlide} className='btn btn-lg'>
          &lt;
        </button>
        <div className='carousel size-64 p-4 space-x-4 bg-neutral rounded-box mx-auto'>
          {images.map((image, index) => (
            <div
              key={index}
              className='carousel-item w-full transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}>
              <Image src={image.src} width={800} height={800} alt={`Slide ${index}`}></Image>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className='btn btn-lg'>
          &gt;
        </button>
      </div>
    </>
  );
};

export default Carousel;
