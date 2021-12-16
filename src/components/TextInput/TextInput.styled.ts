import styled from "styled-components";

export const StyledTextInput = styled.div`
  background-color: ${(props) => props.theme.colors.lightMode.elements};
  color: ${(props) => props.theme.colors.lightMode.input};
  width: min(100%, 50rem);
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  input {
    outline: none;
    border: none;
    background-color: transparent;
    font: inherit;
    font-size: 1.6rem;
    width: 100%;
  }
`;
