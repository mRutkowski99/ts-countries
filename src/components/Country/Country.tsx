import { StyledCountry, FlagContainer, Stats } from "./Country.styled";

interface ICountry {
  flagSrc: string;
  population: string;
  region: string;
  capital: string;
}

const Country = ({ flagSrc, population, region, capital }: ICountry) => {
  return (
    <StyledCountry>
      <FlagContainer />
      <Stats>
        <h2>Germany</h2>
        <div>
          <h3>Population:</h3>
          <span>{population}</span>
        </div>
        <div>
          <h3>Region:</h3>
          <span>{region}</span>
        </div>
        <div>
          <h3>Capital:</h3>
          <span>{capital}</span>
        </div>
      </Stats>
    </StyledCountry>
  );
};

export default Country;
