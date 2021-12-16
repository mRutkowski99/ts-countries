import styled from "styled-components";

export const StyledCountries = styled.section`
  max-width: 120rem;
  margin: 3rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 4rem;
  justify-items: center;
`;