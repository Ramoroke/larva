import React,{useEffect, useState} from 'react'

import {
    HeroButton,
    HeroButtonLink,
    HeroContainer,
    HeroH1,
    HeroImage,
    HeroLeftArrow,
    HeroP,
    HeroRightArrow,
    HeroText,
    HeroWrapper
} from "./HeroElements"
import { Link } from 'react-router-dom';

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'car1.jpg',
        'car2.jpg',
        'car3.jpg',
    ];

    const nextSlide = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentImageIndex(prevIndex =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
  return (
    <HeroContainer>
        <HeroWrapper>
            {images.map((image, index) => (
                <HeroImage
                    key={index}
                    src={`${process.env.PUBLIC_URL}/assets/cars/images/${image}`}
                    alt={`Car${index+1}`}
                    style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                />
            ))}
            <HeroLeftArrow onClick={prevSlide}/>
            <HeroRightArrow onClick={nextSlide} />
            <HeroText>
                <HeroH1>Wecome to the car Showcase</HeroH1>
                <HeroP>Explore and Discover Classic and Modern Cars</HeroP>
                <HeroButton>
                    <HeroButtonLink to='/showcase'>Get Started</HeroButtonLink>
                </HeroButton>
            </HeroText>
        </HeroWrapper>
    </HeroContainer>
  )
}

export default HeroSection
