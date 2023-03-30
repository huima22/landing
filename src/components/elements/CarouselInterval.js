import React, {useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../elements/Image';
function CarouselInterval() {
  return (
  <div className="container has-shadow">
    <Carousel>
      <Carousel.Item interval={3000}>
        <Image
           className="display-nonblock"
          src={require('./../../assets/images/CarouselSlider1.png')}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Image
          className="display-nonblock"
         src={require('./../../assets/images/CarouselSlider2.png')}
          alt="Second slide"
        />

      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default CarouselInterval;