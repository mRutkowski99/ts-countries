import { StyledCountries } from "./Countries.styled";
import useRenderCountries from "./useRenderCountries";

const Countries: React.FC = () => {
  const { countries, isLoading, error } = useRenderCountries();

  console.log(error);

  return (
    <StyledCountries>
      {error && <p>{error}</p>}
      {isLoading && !error && <p>Loading...</p>}
      {!isLoading && !error && countries}
    </StyledCountries>
  );
};

export default Countries;
