import styled from "styled-components";

export const StyledPage = styled.main`
  background-color: ${(props) => props.theme.colors.bg};
  min-height: 86vh;
  padding: 2rem 1rem;

  & > * {
    max-width: 120rem;
    margin-inline: auto;
  }
`;
