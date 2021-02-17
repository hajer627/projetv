import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default function Slide() {
        return (
            <div>
            
                <Carousel  >
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index2-1583967114.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Here we Have clothes for Men</h3>
                            <p>All Men wear are available in our store and you can shippable them everywhere</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://kind-wescoff-1a57a1.netlify.app/static/media/women_1.6bd3a290.webp"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>As well for Women</h3>
                            <p>Find your unique style</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://kind-wescoff-1a57a1.netlify.app/static/media/women_2.610d5668.webp"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome To Our Clothes Store</h3>
                            <p>We provide have the top clothing quality out there</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }