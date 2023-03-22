import React from "react";
import { Spinner, QuickLayout, Arrows, cacheImages } from "../index";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [slides, setSlides] = React.useState([]);
  const [slide, setSlide] = React.useState({});
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    setSlide(slides[slideIndex]);
  }, [slideIndex, slides]);

  React.useEffect(() => {
    async function fetchSlides() {
      const response = await fetch(
        "https://raw.githubusercontent.com/nkmwicz/content-presentations/main/fhs-2023-fr-ambs.json"
      );
      const json = await response.json();
      setSlides(json.slides);
      setIsLoading(false);
      cacheImages(json.images);
    }
    fetchSlides();
    // console.log(json);
  }, []);

  function nextSlide(e: Event) {
    if (e && slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
    if (e && slideIndex === slides.length - 1) {
      setSlideIndex(0);
    }
  }

  function prevSlide(e: Event) {
    if (e && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    if (e && slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    }
  }

  if (isLoading) {
    return (
      <div className="main">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {slide && slide.slide ? (
        <QuickLayout
          mode="dark"
          slide={slide}
          nextClick={nextSlide}
          prevClick={prevSlide}
        />
      ) : (
        <Arrows handleNextClick={nextSlide} handlePrevClick={prevSlide} />
      )}
    </>
  );
}

export default App;
