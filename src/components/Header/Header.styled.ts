import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.lightMode.elements};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
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
    color: ${(props) => props.theme.colors.lightMode.text};
    font-weight: ${(props) => props.theme.fontWeights.xbold};
    font-size: clamp(1.6rem, 4vw, 3rem);
  }
`;
