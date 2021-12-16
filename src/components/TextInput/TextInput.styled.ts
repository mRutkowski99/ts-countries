import styled from "styled-components";

export const StyledTextInput = styled.div`
  background-color: ${(props) => props.theme.colors.lightMode.elements};
  color: ${(props) => props.theme.colors.lightMode.input};
  width: min(100%, 50rem);
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: ${(props) => props.theme.boxShadow};

  input {
    outline: none;
    border: none;
    background-color: transparent;
    font: inherit;
    font-size: 1.6rem;
    width: 100%;
  }
`;
