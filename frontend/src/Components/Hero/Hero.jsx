import React, {useState, useEffect}from 'react'
import './Hero.css';
import marvel_comic from '../Assets/marvel_comic.jpg';
import starwars_comic from '../Assets/starwars_comic.webp';

const slides = [
    { text: "Marvel Comics", img: marvel_comic, description: "Explore epic Marvel adventures" },
    { text: "Star Wars Comics", img: starwars_comic, description: "Join the Star Wars universe" },
  ];
  

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  

  return (
    <div className="hero">
    <h2 className="welcome-message">Discover the World of Comics!</h2>
    <div className="hero-slide">
      <div className="hero-text">
        <h1>{slides[currentSlide].text}</h1>
        <p className="hero-description">{slides[currentSlide].description}</p>
      </div>
      <div className="divider"></div>
      <div className="hero-image">
        <img src={slides[currentSlide].img} alt={slides[currentSlide].text} />
      </div>
    </div>

    </div>
  )
}
