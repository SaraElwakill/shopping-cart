import React from 'react'
import './hero.scss'
import Carousel from 'react-bootstrap/carousel';


const Hero = () => {



    return (

            <Carousel style={{zIndex:"10"}}>
                <Carousel.Item>
                    <img src="/images/Dubai-jewelry-AR06012020-5.jpg" alt=""/>
                </Carousel.Item> 
                <Carousel.Item >
                    <img  src='/images/Dubai-jewelry-AR06012020-1.jpg' alt="" />
                </Carousel.Item>
                <Carousel.Item >
                    <img  src='/images/Dubai-jewelry-AR06012020-2.jpg' alt="" />
                </Carousel.Item> 
            </Carousel>

    )
}

export default Hero