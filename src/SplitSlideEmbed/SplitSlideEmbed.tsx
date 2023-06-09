import * as React from "react";
import "../styling.scss";
import { SplitSlideEmbedProps } from "./SplitSlideEmbed.types";
/**
 * SplitSlideChild operates similarly to splitSlide, but instead
 * of taking an image for the right box, it takes a child for
 * creating a customized slide. For instance, it could take in a 
 * leaflet.js map. For this reason, the rightChildBox takes in a 
 * ref as well to help sizing any children in the 
 * Props:
 * -- headerClass: accepts a class for customized css for the header. 
 * -- h1Class: accepts a class for customized css for the h1 text.
 * -- title: accepts a string, the title for the slide.
 * -- subTitle: accepts a string, the subtitle for the slide.
 * -- leftBoxClass: accepts a class for customized styling 
 * of the leftBox.
 * -- textArray: accepts an array of objects in the following datamodel
 * ([{text: 'String', color: 'String'}, {...}]) 
 * -- ref,
  rightChildBoxClass
 */

function SplitSlideEmbed({
  headerClass,
  h1Class,
  title,
  subTitle,
  leftBoxClass,
  textArray,
  rightChildBoxClass,
  embed
}: SplitSlideEmbedProps) {
  return (
    <div>
      <div className={`${headerClass} header`}>
        <h1 className={h1Class ? h1Class : ""}>
          {title}{" "}
          {subTitle ? (
            <>
              <br /> {subTitle}
            </>
          ) : null}
        </h1>
      </div>
      <div className="split-container">
        <div className="split-container-wrapper">
          <div className={leftBoxClass ? leftBoxClass : "left-box"}>
            {textArray &&
              textArray.map((a, i) => {
                return (
                  <p key={`SSEtextArray${i}`} style={{ color: a.color }}>
                    {a.text}
                  </p>
                );
              })}
          </div>
          <div
            className={
              rightChildBoxClass
                ? `${rightChildBoxClass} right-box`
                : "right-box"
            }
          >
            {embed && (
              <div className="img-right-box">
                {/* <div className="embed-container"> */}
                <iframe
                  className="responsive-iframe"
                  src={embed.url}
                  title={embed.title}
                  allowFullScreen
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              // </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitSlideEmbed;
