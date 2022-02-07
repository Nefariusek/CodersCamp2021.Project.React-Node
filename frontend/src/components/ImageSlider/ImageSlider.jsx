import './ImageSlider.scss';

import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

/**
 * Component creates slider with changing images with texts.
 * Component accepts following inputs:
 * @param {Array.<{imagePathOrUrl: String, text: String}>} slides - array of objects with data about the slides (image url or path and text). If text is empty string there is no background for text.
 * @param {number} [initialIndex=0] - index of the first image to show
 * @param {boolean} [withEffect=true] - whether there should be animated hover effect
 * @param {boolean} [withAutoPlay=true] - whether there should be autoplay
 * @param {number} [delay=5000] - delay (in miliseconds) in autoplay
 * @param {string} [arrowType=round] - arrow type: round or square
 */
const ImageSlider = (props) => {
  const {
    slides,
    initialIndex = 0,
    withEffect = true,
    withAutoPlay = true,
    delay = 5000,
    arrowType = 'round',
    setIsLastSlide,
  } = props;

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

  useEffect(() => {
    if (typeof setIsLastSlide === 'function') {
      activeIndex === numberOfSlides - 1 ? setIsLastSlide(true) : setIsLastSlide(false);
    }
  }, [activeIndex, numberOfSlides, setIsLastSlide]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

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

  const handleEffectOnMouseMove = (event) => {
    if (withEffect) {
      activeSlideRef.current.classList.add('slide-effect');
      const slide = activeSlideRef.current;
      const r = slide.getBoundingClientRect();

      slide.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
      slide.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
    }
  };

  const handleEffectOnMouseLeave = () => {
    if (withEffect) {
      activeSlideRef.current.classList.remove('slide-effect');
      activeSlideRef.current.style.setProperty('--x', 0);
      activeSlideRef.current.style.setProperty('--y', 0);
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
      <div className="slider" {...swipeHandlers}>
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
                  <img
                    ref={activeSlideRef}
                    src={slide.imagePathOrUrl}
                    alt={slide.alt}
                    className="slide-image"
                    onMouseMove={handleEffectOnMouseMove}
                    onMouseLeave={handleEffectOnMouseLeave}
                  />
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
