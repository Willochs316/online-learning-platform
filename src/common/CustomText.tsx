import * as React from "react";

interface TextProps {
  content: string;
  className: string;
  size: "small" | "medium" | "large";
}

export const CommonText: React.FunctionComponent<TextProps> = (props) => {
  const { content, className, size } = props;

  const style = {
    fontSize: size === "small" ? "14px" : size === "medium" ? "16px" : "24px",
  };

  return (
    <>
      <p className={className} style={style}>
        {content}
      </p>
    </>
  );
};
