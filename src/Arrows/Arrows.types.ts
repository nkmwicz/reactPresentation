export interface ArrowsProps {
  disableLeftArrow?: boolean;
  disableRightArrow?: boolean;
  rightArrowClass?: string;
  leftArrowClass?: string;
  handleNextClick: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  handlePrevClick: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
}