import React from "react";
import { CenteredEmbedProps } from "./CenteredEmbed.types";

function CenteredEmbed({
  headerClass,
  title,
  subTitle,
  embed,
  contentBoxEmbedClass
}: CenteredEmbedProps) {
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
      <div className={`${contentBoxEmbedClass} content-box-embed`}>
        {embed ? (
          <div className="content-embed">
            <iframe
              className="responsive-iframe"
              src={embed.url}
              title={embed.title}
              allowFullScreen
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CenteredEmbed;
