import styled from "styled-components";

interface IProps {
  flagSrc?: string;
}

export const StyledCountry = styled.div`
  width: 27rem;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.boxShadow};
  cursor: pointer;
`;

export const FlagContainer = styled.div<IProps>`
  width: 100%;
  height: 16rem;
  background-image: url(${(props) => props.flagSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Info = styled.div`
  padding: 2rem 2rem 3rem;
  background-color: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.text};

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
