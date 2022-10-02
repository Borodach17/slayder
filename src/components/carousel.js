import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import kar1 from '../assets/kar1.jpg'
import kar2 from '../assets/kar2.jpg'
import kar from '../assets/kar.jpg'

export class CarouselBox extends Component {
  render() {
    return (
        <div className='carusel'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={kar1}
                        alt='forest'
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsun dolor, sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={kar2}
                        alt='Mountain'
                    />
                    <Carousel.Caption>
                        <h3>Mountain image</h3>
                        <p>Lorem ipsun dolor, sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={kar}
                        alt='Desert'
                    />
                    <Carousel.Caption>
                        <h3>Desert image</h3>
                        <p>Lorem ipsun dolor, sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
  }
}

export default CarouselBox