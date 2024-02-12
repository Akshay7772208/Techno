import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
    <div class="mt-10"></div>
    <h2 style={{textAlign: 'center'}}><strong>Our Student's Placed At</strong></h2>
    <div class="btmborder"></div>
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img style={{width: '200px'}}src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>

    </>
  );
}

export default ImageCarousel;