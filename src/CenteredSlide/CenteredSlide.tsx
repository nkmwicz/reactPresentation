import * as React from "react";
import { CenteredSlideProps } from "./CenteredSlide.types";
import "../styling.scss";

/**
 * --headerClass is a class
 * --recommended data model for images: {image: 'string', flex: Number, description: 'String' }. image is the image url. Flex is the flex number for the image. Default value is 1. Change to 2 if you want that image to be twice the width of the other images. Description is the figcaption value and alt-text.
 * --If you prefer a series of columns of text, use textArray, which takes an array of objects: [{text: [{text: 'String', color: 'String'}, [{text: 'String', color: 'String'}]], color: 'String'}].
 * The convoluted array of arrays for text permits subitems to be incorporated into the
 * --headerClass
 * --contentBoxClass
 * --
 */
function CenteredSlide({
  headerClass,
  title,
  subTitle,
  images,
  text,
  contentBoxClass,
  contentTextClass,
  imageArrayBoxClass
}: CenteredSlideProps) {
  return (
    <div className="cover">
      <div className={`${headerClass} header`}>
        <h1>
          {title}{" "}
          {subTitle ? (
            <>
              <br /> {subTitle}
            </>
          ) : null}
        </h1>
      </div>
      <div className={`${contentBoxClass} content-box`}>
        {images && images.length > 0 ? (
          <div className="content-images">
            {images.map((a, i) => (
              <figure
                key={`CSfigure${i}`}
                className={`${imageArrayBoxClass} imgArray-box`}
                style={a.opacity ? { opacity: a.opacity } : { opacity: 1 }}
              >
                {a.image && <img src={a.image} alt={a.description} />}
                <figcaption className="text-center">{a.description}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className={`${contentTextClass} content-text`}>
            {text &&
              text.map((a, i) => {
                return (
                  <div key={`textDiv${i}`} className="text">
                    <div className="text-item">
                      <p style={{ color: a.color }}>{a.text}</p>
                      {a.children && (
                        <ul>
                          {a.children.map((b, i) => {
                            return (
                              <li
                                key={`childrenLI${i}`}
                                style={{ color: b.color }}
                              >
                                {b.text}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CenteredSlide;
