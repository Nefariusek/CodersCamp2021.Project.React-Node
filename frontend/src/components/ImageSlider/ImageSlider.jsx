import './ImageSlider.scss';

import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import React, { useEffect, useRef, useState } from 'react';

const ImageSlider = (props) => {
  const { slides, initialIndex = 0, withAutoPlay = true, delay = 5000, arrowType = 'round' } = props;
  const numberOfSlides = Array.isArray(slides) ? slides.length : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex >= 0 && initialIndex < numberOfSlides ? initialIndex : 0);
  const [paused, setPaused] = useState(false);
  const activeSlideRef = useRef(null);
  const timerRef = useRef(null);
  const slideRef = useRef(null);

  const resetTimeout = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    if (withAutoPlay) {
      resetTimeout();
      timerRef.current = setTimeout(
        () => {
          if (!paused) {
            setActiveIndex((prevIndex) => (prevIndex === numberOfSlides - 1 ? 0 : prevIndex + 1));
          }
        },
        delay > 0 ? delay : 0,
      );
    }
    return () => {
      resetTimeout();
    };
  }, [withAutoPlay, activeIndex, numberOfSlides, paused, delay]);

  if (!Array.isArray(slides) || numberOfSlides <= 0) {
    return null;
  }

  const nextSlide = () => {
    changeSlide(1);
  };

  const prevSlide = () => {
    changeSlide(-1);
  };

  const changeSlide = (step) => {
    resetTimeout();
    if (step < 0) {
      setActiveIndex(activeIndex === 0 ? numberOfSlides - 1 : activeIndex + step);
    } else {
      setActiveIndex(activeIndex === numberOfSlides - 1 ? 0 : activeIndex + step);
    }
  };

  const handlePauseOnMouseEnter = () => {
    if (withAutoPlay) setPaused(true);
  };

  const handlePauseOnMouseLeave = () => {
    if (withAutoPlay) setPaused(false);
  };

  const getArrowType = () => {
    return arrowType === 'round' ? 'round' : 'square';
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        height: {
          xs: '350px',
          sm: '400px',
          md: '430px',
        },
      }}
    >
      <div className="slider">
        {numberOfSlides > 1 && <ArrowLeft className={`slider-arrow-left ${getArrowType()}`} onClick={prevSlide} />}
        {numberOfSlides > 1 && <ArrowRight className={`slider-arrow-right ${getArrowType()}`} onClick={nextSlide} />}

        {slides.map((slide, index) => {
          return (
            <div
              className={index === activeIndex ? 'slide active' : 'slide'}
              key={slide.imagePathOrUrl}
              onMouseEnter={handlePauseOnMouseEnter}
              onMouseLeave={handlePauseOnMouseLeave}
              ref={slideRef}
            >
              {index === activeIndex && (
                <>
                  {slide.text ? <p className="slide-text">{slide.text}</p> : ''}
                  <img ref={activeSlideRef} src={slide.imagePathOrUrl} alt={slide.alt} className="slide-image" />
                </>
              )}
            </div>
          );
        })}
      </div>
    </Grid>
  );
};

export default ImageSlider;
