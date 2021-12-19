import { ReactComponent as IconMagnifyingGlass } from "../../assets/magnifying-glass.svg";
import { StyledTextInput } from "./TextInput.styled";
import React, { useContext, useRef } from "react";
import AppContext from "../../store/AppContext";

const TextInput: React.FC = () => {
  const context = useContext(AppContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputChangeHandler: (event: React.ChangeEvent) => void = (event) => {
    const target = event.target as HTMLInputElement;
    context.setTextInput(target.value);
  };

  if (context.endPoint.includes("region")) inputRef.current!.value = "";

  return (
    <StyledTextInput>
      <IconMagnifyingGlass />
      <input
        ref={inputRef}
        onChange={inputChangeHandler}
        type="text"
        id="country-name"
        placeholder="Search for a country..."
      />
    </StyledTextInput>
  );
};

export default TextInput;
