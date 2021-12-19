import { StyledCountry, FlagContainer, Info } from "./Country.styled";

interface ICountry {
  flagSrc: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

const Country = ({ flagSrc, name, population, region, capital }: ICountry) => {
  return (
    <StyledCountry>
      <FlagContainer flagSrc={flagSrc} />
      <Info>
        <h2>{name}</h2>
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
      </Info>
    </StyledCountry>
  );
};

export default Country;
