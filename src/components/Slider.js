import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import  bouddha  from '../images/bouddha.jpg'
import  pokhara  from '../images/pokhara.jpg'
import  gumba  from '../images/gumba.jpg'


export default function Slider() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src= {bouddha}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Bouddha Stupa | Kathmandu</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src= {pokhara}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Lakeside | Pokhara</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src= {gumba}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Buddha Bhihar | Kavre</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
