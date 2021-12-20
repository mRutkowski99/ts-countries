import { StyledNavButton } from "./NavButton.styled";

const NavButton: React.FC<{ to: string }> = ({ to, children }) => {
  return <StyledNavButton to={to}>{children}</StyledNavButton>;
};

export default NavButton;
