import React from "react";
import { StyledHeader } from "./Styles";

const SectionHeader = ({ children, size, flexPosition, color = "black" }) => {
  return (
    <StyledHeader size={size} color={color} flexPosition={flexPosition}>
      {children}
    </StyledHeader>
  );
};
export default SectionHeader;
