import React from "react";
import { SplitTextProps } from "./SplitText.types";

function SplitText({
  title,
  subTitle,
  h1Class,
  headerClass,
  text,
  leftBoxClass,
  rightBoxClass,
  splitText
}: SplitTextProps) {
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
            {text &&
              text.map((a: { color: string; text: string }, i: number) => {
                return (
                  <div
                    className="left-text-container"
                    key={`SStextContainer${i}`}
                  >
                    <p style={{ color: a.color }}>{a.text}</p>
                  </div>
                );
              })}
          </div>
          <div className={rightBoxClass ? rightBoxClass : "right-box"}>
            {splitText && (
              <div className="rightText">
                <div className="rightTextWrapper">
                  <p>
                    <strong>{splitText}</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitText;
