import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/images/mg1 (1).jpg';
import img2 from  '../../../assets/images/mg1 (2).JPG';

const BrandCarousel = () => {
    return (
        <div>
                <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
        </div>
    );
};

export default BrandCarousel;