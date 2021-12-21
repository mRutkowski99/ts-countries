import styled from "styled-components";

export const StyledPage = styled.main`
  background-color: ${(props) => props.theme.colors.bg};
  min-height: 90vh;
  padding: 2rem 1rem;
  position: relative;

  & > * {
    max-width: 120rem;
    margin-inline: auto;
  }
`;
