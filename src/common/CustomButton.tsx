import * as React from "react";
import Button from "@material-ui/core/Button";

interface ButtonProps {
  label: string;
  className: string;
  onClick: () => void;
  variant: "contained" | "outlined" | "text";
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

  const { label, className, onClick, variant } = props;
  const { hover } = state;

  return (
    <Button
      className={className}
      variant={variant}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </Button>
  );
};
