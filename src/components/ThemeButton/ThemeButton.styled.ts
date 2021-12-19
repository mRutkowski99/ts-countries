import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  cursor: pointer;
`;
