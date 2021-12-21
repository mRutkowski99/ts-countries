import { StyledHeader } from "./Header.styled";
import ThemeButton from "../ThemeButton/ThemeButton";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <ThemeButton />
      </div>
    </StyledHeader>
  );
};

export default Header;
