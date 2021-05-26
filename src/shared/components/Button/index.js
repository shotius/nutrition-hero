import React from "react";
import { StyledButton } from "./Styles";

const Button = ({
  children,
  type,
  width,
  margin,
  color,
  onClick,
  isActive,
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <StyledButton
      type={type}
      width={width}
      margin={margin}
      color={color}
      onClick={handleClick}
      isActive={isActive}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
