import * as React from "react";
import Intro from "../Intro/Intro";
import SplitSlide from "../SplitSlide/SplitSlide";
import Arrows from "../Arrows/Arrows";
import CenteredSlide from "../CenteredSlide/CenteredSlide";
import SplitSlideEmbed from "../SplitSlideEmbed/SplitSlideEmbed";
import { LayoutTypes } from "./Layout.types";
import { SplitText } from "../SplitText";

/**
 * Layout is a default layout that uses takes a state array that follows the data model
 * discussed for each. It also takes various props
 * that help control the
 * --ImagesToCache takes an array of images that should be
 * cached so they will be available before
 */

function Layout({
  slide,
  bgColor,
  bgImage,
  nextClick,
  prevClick,
  h1Class,
  headerClass,
  rightBoxClass,
  imgBoxClass,
  leftBoxClass,
  contentBoxClass,
  contentTextClass,
  imageArrayBoxClass,
  mode
}: LayoutTypes): JSX.Element {
  return (
    <div className={mode === "dark" ? "mainDark" : "main"}>
      <Arrows handleNextClick={nextClick} handlePrevClick={prevClick} />
      {slide.intro && (
        <Intro
          title={slide.title}
          subTitle={slide.subTitle}
          byLine={slide.byLine}
          bgColor={bgColor}
          bgImage={bgImage}
        />
      )}
      {slide.split && (
        <SplitSlide
          title={slide.title}
          subTitle={slide.subTitle}
          text={slide.text}
          image={slide.image}
          h1Class={h1Class}
          headerClass={headerClass}
          leftBoxClass={leftBoxClass}
          rightBoxClass={rightBoxClass}
          imgBoxClass={imgBoxClass}
        />
      )}
      {slide.centered && slide.text && (
        <CenteredSlide
          title={slide.title}
          subTitle={slide.subTitle}
          text={slide.text}
          contentBoxClass={contentBoxClass}
          contentTextClass={contentTextClass}
          imageArrayBoxClass={imageArrayBoxClass}
        />
      )}
      {slide.centered && slide.images && (
        <CenteredSlide
          title={slide.title}
          subTitle={slide.subTitle}
          images={slide.images}
        />
      )}
      {slide.splitEmbed && (
        <SplitSlideEmbed
          title={slide.title}
          subTitle={slide?.subTitle}
          textArray={slide?.text}
          embed={slide.embed}
        />
      )}
      {slide.splitText && (
        <SplitText
          title={slide.title}
          splitText={slide.rightText}
          subTitle={slide.subTitle}
          text={slide.text}
          image={slide.image}
          h1Class={h1Class}
          headerClass={headerClass}
          leftBoxClass={leftBoxClass}
          rightBoxClass={rightBoxClass}
          imgBoxClass={imgBoxClass}
        />
      )}
    </div>
  );
}

export default Layout;
