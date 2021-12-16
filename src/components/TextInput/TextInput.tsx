import { ReactComponent as IconMagnifyingGlass } from "../../assets/magnifying-glass.svg";
import { StyledTextInput } from "./TextInput.styled";

const TextInput: React.FC = () => {
  return (
    <StyledTextInput>
      <IconMagnifyingGlass />
      <input
        type="text"
        id="country-name"
        placeholder="Search for a country..."
      />
    </StyledTextInput>
  );
};

export default TextInput;
