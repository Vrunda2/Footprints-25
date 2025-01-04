import React, { useState, useEffect, useRef } from 'react';
import './testimonial.css';
import Heading from '../../Common/Headings/Heading';
import testiData from '../../../Data/Testimonial';

const Testimonials24 = () => {
  // const [position, setPosition] = useState(0);
  // const [autoPlayInterval, setAutoPlayInterval] = useState(null);
  const sliderWrapper = useRef(null);
  let position = 0;
  const testimonials = testiData;


  useEffect(() => {
    startAutoPlay();

    return ()=>{
      stopAutoPlay();
    }
  }, []);

  const moveSlider = (direction) => {
    // console.log("Hello");
    const newPosition = direction === 'right' ? position + 1 : position - 1;
    position = (newPosition >= testimonials.length ? 0 : newPosition < 0 ? testimonials.length - 1 : newPosition);
    // position = position >= testimonials.length ? 0 : position < 0 ? testimonials.length - 1 : position;
    // console.log(sliderWrapper.current.target,direction);
    sliderWrapper.current.style.transform = `translateX(-${position * 100}%)`;
    // setPosition(newPosition >= testimonials.length ? 0 : newPosition < 0 ? testimonials.length - 1 : newPosition);
  };

  let intervalId;

  const startAutoPlay = () => {
    intervalId = setInterval(() => {
      moveSlider('right');
    }, 5000); // Adjust the interval as needed

    // setAutoPlayInterval(intervalId);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalId);
    // setAutoPlayInterval(null);
  };

  const nextSlide = () => {
    // console.log("hello");
    moveSlider('right');
    stopAutoPlay();
    startAutoPlay();
  };
  
  const prevSlide = () => {
    moveSlider('left');
    stopAutoPlay();
    startAutoPlay();
  };

  return (
    <main>
      <div className="sliders">
      <Heading
              className="kaleido_heading"
              id="glheading"
              title={"TESTIMONIALS"}
            />
        <div className="slide-wrappers" ref={sliderWrapper} style={{transform:`translateX(-${position * 100}%)`}}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="slide">
              <div className="testimonial">
                <blockquote>{testimonial.quote}</blockquote>
                <p className="author">
                  {testimonial.author} <span>{testimonial.role}</span>
                </p>
              </div>
              <div className="slider-img">
                <img src={testimonial.image} alt={`Author ${testimonial.author} Image`} />
              </div>
            </div>
          ))}
        </div>

        <div className="buttons">
          <div className="previous" onClick={prevSlide}></div>
          <div className="next" onClick={nextSlide}></div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials24;
