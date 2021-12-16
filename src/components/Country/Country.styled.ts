import styled from "styled-components";

export const StyledCountry = styled.div`
  width: 25rem;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const FlagContainer = styled.div`
  width: 100%;
  height: 15rem;
  background: red;
`;

export const Stats = styled.div`
  padding: 2rem 2rem 3rem;
  background-color: ${(props) => props.theme.colors.lightMode.elements};

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    &:not(:last-child) {
      margin-bottom: 0.25rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: ${(props) => props.theme.fontWeights.xbold};
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
