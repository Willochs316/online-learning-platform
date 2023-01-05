import React from "react";

interface TextProps {
  src: any;
  alt: string;
 className: string
}

export const Image: React.FunctionComponent<TextProps> = (props) => {
  const { src, alt, className } = props;

  return <img src={src} alt={alt} className={className} />;
};
