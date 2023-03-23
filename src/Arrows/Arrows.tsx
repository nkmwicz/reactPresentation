import "../styling.scss";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useEffect } from "react";
import { ArrowsProps } from "./Arrows.types";

/**
 * --disableLeftArrow takes a function that sets the conditions
 * under which the left arrow should be disabled.
 * --disableRightArrow takes a function that sets the conditions
 * under which the right arrow should be disabled.
 * --rightArrowClass takes a class name for custom styling.
 * --leftArrowClass takes a class name for custom styling.
 * --handleNextClick takes a function for determining what happens when
 * the right arrow is clicked.
 * --handlePrevClick takes a function for determining what happens when
 * the left arrow is clicked.
 * --index accepts a state feature that will determine the index
 * stateArray that will determine the current slide state.
 */

function Arrows({
  disableLeftArrow,
  disableRightArrow,
  rightArrowClass,
  leftArrowClass,
  handleNextClick,
  handlePrevClick
}: ArrowsProps): JSX.Element {
  useEffect(() => {
    // add event listener for arrow keys and change slideIndex
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        handleNextClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
      } else if (e.key === "ArrowLeft") {
        handlePrevClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {disableRightArrow ? (
        <button
          type="button"
          className={rightArrowClass ? rightArrowClass : "rightArrow button"}
          disabled
        >
          &rarr;
        </button>
      ) : (
        <button
          type="button"
          className={rightArrowClass ? rightArrowClass : "rightArrow button"}
          onClick={handleNextClick}
        >
          &rarr;
        </button>
      )}
      {disableLeftArrow ? (
        <button
          type="button"
          disabled
          className={leftArrowClass ? leftArrowClass : "leftArrow button"}
        >
          &larr;
        </button>
      ) : (
        <button
          type="button"
          className={leftArrowClass ? leftArrowClass : "leftArrow button"}
          onClick={handlePrevClick}
        >
          &larr;
        </button>
      )}
    </>
  );
}

Arrows.propTypes = {
  disableLeftArrow: PropTypes.func,
  disableRightArrow: PropTypes.func,
  rightArrowClass: PropTypes.string,
  leftArrowClass: PropTypes.string,
  handleNextClick: PropTypes.func.isRequired,
  handlePrevClick: PropTypes.func.isRequired
};

export default Arrows;
