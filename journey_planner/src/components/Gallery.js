import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [slideIndex, setSlideIndex] = useState(0); // Start with 0 for easier array handling

    const slides = [
        "https://metickets.krc.co.ke/images/stations/emali.jpg",
        "https://metickets.krc.co.ke/images/stations/mariakani.jpg",
        "https://metickets.krc.co.ke/images/stations/miasenyi_s.jpg"
    ];

    const plusSlides = useCallback((n) => {
        setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            plusSlides(1); // Move to the next slide
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [plusSlides]);

    return (
        <section id="gallery">
            <h1 className="section-title">Explore Our Stations</h1>
            <div className="gallery-grid">
                {/* Static Image 1 */}
                <div className="card">
                    <img 
                        src="https://metickets.krc.co.ke/images/stations/54_n.jpg" 
                        alt="Nairobi Terminus" 
                        className="station-image" 
                    />
                    <div className="card-content">
                        <h3>Nairobi Terminus</h3>
                        <p>Located at Syokimau, Nairobi. Built as two trains with a bridge on top.</p>
                    </div>
                </div>

                {/* Static Image 2 */}
                <div className="card">
                    <img 
                        src="https://metickets.krc.co.ke/images/stations/85_n.jpg" 
                        alt="Mombasa Terminus" 
                        className="station-image" 
                    />
                    <div className="card-content">
                        <h3>Mombasa Terminus</h3>
                        <p>Located in Miritini, Mombasa. Built as concentric circles and a central tower.</p>
                    </div>
                </div>

                {/* Carousel */}
                <div className="carousel">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="carousel-slide"
                            style={{ display: index === slideIndex ? "block" : "none" }}
                        >
                            <img 
                                src={slide} 
                                alt={`Slide ${index + 1}`} 
                                className="carousel-image" 
                            />
                        </div>
                    ))}
                    <button 
                        className="carousel-nav-btn" 
                        onClick={() => plusSlides(-1)}
                        aria-label="Previous Slide"
                    >
                        &#10094;
                    </button>
                    <button 
                        className="carousel-nav-btn" 
                        onClick={() => plusSlides(1)}
                        aria-label="Next Slide"
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
