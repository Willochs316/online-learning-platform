import * as React from "react";

interface buttonProps {
  content: string;
  className: string;
  color: "grey" | ""
  size: "small" | "medium" | "large";
}

export const ButtonField: React.FunctionComponent<buttonProps> = (props) => {
  const { content, className, size } = props;

  const style = {
    fontSize: size === "small" ? "12px" : size === "medium" ? "16px" : "24px",
  };

  return (
    <>
      <button className={className} style={style}>
        {content}
      </button>
    </>
  );
};
