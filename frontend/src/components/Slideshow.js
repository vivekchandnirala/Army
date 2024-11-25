import React, { useState, useEffect } from 'react';
import './Slideshow.css';

// Import images
import slide0 from '../assets/slideshow/slide0.jpeg';
import slide1 from '../assets/slideshow/slide1.jpeg';
import slide2 from '../assets/slideshow/slide2.jpeg';
import slide3 from '../assets/slideshow/slide3.jpeg';
import slide4 from '../assets/slideshow/slide4.jpeg';
// import slide5 from '../assets/slideshow/slide5.jpg';

const images = [slide0, slide1, slide2, slide3, slide4];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />

            <button className="prev-button" onClick={prevSlide}>❮</button>
            <button className="next-button" onClick={nextSlide}>❯</button>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
