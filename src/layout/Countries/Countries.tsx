import Center from "../../utilities/Center";
import { StyledCountries } from "./Countries.styled";
import useRenderCountries from "./useRenderCountries";

const Countries: React.FC = () => {
  const { countries, isLoading, error } = useRenderCountries();

  return (
    <>
      {error && (
        <Center>
          <p>{error}</p>
        </Center>
      )}
      {(isLoading || countries === null) && !error && (
        <Center>
          <p>Loading...</p>
        </Center>
      )}
      {!isLoading && countries !== null && !error && (
        <StyledCountries>{countries}</StyledCountries>
      )}
    </>
  );
};

export default Countries;
