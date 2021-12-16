import { StyledHeader } from "./Header.styled";
import ThemeButton from "../ThemeButton/ThemeButton";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>
        <h1>Where in the world?</h1>
        <ThemeButton />
      </div>
    </StyledHeader>
  );
};

export default Header;
