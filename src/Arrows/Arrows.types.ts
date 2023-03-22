export interface ArrowsProps {
  disableLeftArrow?: boolean;
  disableRightArrow?: boolean;
  rightArrowClass?: string;
  leftArrowClass?: string;
  handleNextClick: (event: Event) => void;
  handlePrevClick: (event: Event) => void;
}