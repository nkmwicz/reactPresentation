import React from "react";
import {
  Spinner,
  QuickLayout,
  cacheImages,
  SplitSlideChild,
  Arrows
} from "../index";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [slides, setSlides] = React.useState([]);
  const [slide, setSlide] = React.useState({
    slide: true,
    title: "Loading",
    child: false
  });
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    setSlide(slides[slideIndex]);
  }, [slideIndex, slides]);

  React.useEffect(() => {
    async function fetchSlides() {
      const response = await fetch(
        "https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/modern-europe/01-introduction.json"
      );
      const json = await response.json();
      setSlides(json.slides);
      setIsLoading(false);
      cacheImages(json.images);
      console.log(json.slides);
    }
    fetchSlides();
    // console.log(json);
  }, []);

  function nextSlide(
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) {
    if (e && slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
    if (e && slideIndex === slides.length - 1) {
      setSlideIndex(0);
    }
  }

  function prevSlide(
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) {
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
      {slide && Object.keys(slide).length !== 0 && slide.slide ? (
        <QuickLayout
          mode="dark"
          slide={slide}
          nextClick={nextSlide}
          prevClick={prevSlide}
        />
      ) : null}
      {slide && Object.keys(slide).length !== 0 && slide.child ? (
        <>
          <Arrows handleNextClick={nextSlide} handlePrevClick={prevSlide} />
          <SplitSlideChild>
            <p>I&apos;m a Child slide</p>
          </SplitSlideChild>
        </>
      ) : null}
    </>
  );
}

export default App;
