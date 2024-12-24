import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 45%;
  margin: auto;
`;

const AutoCarousel = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} >
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} className='rounded-[22px]' />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default AutoCarousel;
