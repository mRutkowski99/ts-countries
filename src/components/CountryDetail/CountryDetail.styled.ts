import styled from "styled-components";

export const StyledCountryDetail = styled.section`
  max-width: 120rem;
  margin: 3rem auto 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5rem;
  color: ${(props) => props.theme.colors.text};

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;

    & > div {
      flex: 1;
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: ${(props) => props.theme.fontWeights.xbold};
  }

  h3 {
    font-size: 1.6rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  ul {
    list-style-type: none;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 3rem;
  }
`;

export const FlagContainer = styled.div`
  img {
    display: block;
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;

    @media (min-width: 800px) {
      margin: 0 auto 0 0;
    }
  }
`;

export const ListsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
`;

export const InfoList = styled.ul`
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const BorderCountryList = styled.ul`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
