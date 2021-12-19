import React from "react";
import { StyledNavButton } from "./NavButton.styled";

const NavButton: React.FC = (props) => {
  return <StyledNavButton>{props.children}</StyledNavButton>;
};

export default NavButton;
