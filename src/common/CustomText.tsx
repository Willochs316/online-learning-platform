import * as React from "react";

interface TextProps {
  content: string;
  className: string;
}

export const CommonText: React.FunctionComponent<TextProps> = (props) => {
  const { content, className } = props;

  return (
    <>
      <p className={className}>{content}</p>
    </>
  );
};