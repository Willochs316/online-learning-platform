import * as React from "react";
import Button from "@material-ui/core/Button";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: "contained" | "outlined";
}

interface ButtonState {
  hover: boolean;
}

export const CustomButton: React.FunctionComponent<ButtonProps> = (props) => {
  const [state, setState] = React.useState<ButtonState>({ hover: false });

  const handleMouseEnter = () => {
    setState({ hover: true });
  };

  const handleMouseLeave = () => {
    setState({ hover: false });
  };

  const { label, onClick, variant } = props;
  const { hover } = state;

  return (
    <Button
      variant={variant}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // style={{ backgroundColor: hover ? "red" : "blue" }}
    >
      {label}
    </Button>
  );
};
