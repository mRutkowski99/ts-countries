import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow: ${(props) => props.theme.boxShadow};
  //makign box-shadow visible above main
  position: relative;
  z-index: 1;

  & > div {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-weight: ${(props) => props.theme.fontWeights.xbold};
    font-size: clamp(1.6rem, 4vw, 3rem);
    cursor: pointer;
  }
`;
