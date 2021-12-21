import { StyledNavButton } from "./NavButton.styled";

const NavButton: React.FC<{ to: string; onClick?: () => void }> = ({
  to,
  children,
  onClick,
}) => {
  return (
    <StyledNavButton onClick={onClick} to={to}>
      {children}
    </StyledNavButton>
  );
};

export default NavButton;
