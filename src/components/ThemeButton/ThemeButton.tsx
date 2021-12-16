import { ReactComponent as IconDark } from "../../assets/moon.svg";
import { ReactComponent as IconLight } from "../../assets/light-up.svg";
import { StyledButton } from "./ThemeButton.styled";
import useChangeTheme from "./useChangeTheme";

const ThemeButton: React.FC = () => {
  const { btnText, changeModeHandler } = useChangeTheme();

  return (
    <StyledButton onClick={changeModeHandler}>
      {btnText === "Light Mode" ? <IconLight /> : <IconDark />}
      <span>{btnText}</span>
    </StyledButton>
  );
};

export default ThemeButton;
