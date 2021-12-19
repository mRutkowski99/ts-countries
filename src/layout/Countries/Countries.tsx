import { StyledCountries } from "./Countries.styled";
import useRenderCountries from "./useRenderCountries";

const Countries: React.FC = () => {
  const { countries, isLoading, error } = useRenderCountries();

  return (
    <StyledCountries>
      {isLoading && <p>Loading...</p>}
      {!isLoading && countries}
    </StyledCountries>
  );
};

export default Countries;
