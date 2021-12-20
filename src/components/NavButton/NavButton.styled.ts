import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavButton = styled(Link)`
  font: inherit;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 0.5rem 2rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
