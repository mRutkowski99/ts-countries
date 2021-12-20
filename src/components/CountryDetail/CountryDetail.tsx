import {
  StyledCountryDetail,
  FlagContainer,
  ListsContainer,
  InfoList,
  BorderCountryList,
} from "./CountryDetail.styled";
import NavButton from "../NavButton/NavButton";
import { ICountryDetail } from "../../constants/interfaces";

const CountryDetail = ({
  countryDetail,
}: {
  countryDetail: ICountryDetail;
}) => {
  return (
    <StyledCountryDetail>
      <FlagContainer>
        <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} />
      </FlagContainer>
      <div>
        <h2>{countryDetail.name}</h2>
        <ListsContainer>
          <InfoList>
            <li>
              <h3>Native Name:</h3>
              <span>{countryDetail.nativeName}</span>
            </li>
            <li>
              <h3>Population:</h3>
              <span>{countryDetail.population}</span>
            </li>
            <li>
              <h3>Region:</h3>
              <span>{countryDetail.region}</span>
            </li>
            <li>
              <h3>Sub Region:</h3>
              <span>{countryDetail.subRegion}</span>
            </li>
            <li>
              <h3>Capital:</h3>
              <span>{countryDetail.capital}</span>
            </li>
          </InfoList>
          <InfoList>
            <li>
              <h3>Top Level Domain:</h3>
              <span>{countryDetail.domain}</span>
            </li>
            <li>
              <h3>Currencies:</h3>
              <span>{countryDetail.currencies}</span>
            </li>
            <li>
              <h3>Languages:</h3>
              <span>{countryDetail.languages}</span>
            </li>
          </InfoList>
        </ListsContainer>
        <div>
          <h3>Border Countries:</h3>
          <BorderCountryList>
            {countryDetail.borderCountries.map((border, idx) => (
              <li key={idx}>
                <NavButton>{border}</NavButton>
              </li>
            ))}
          </BorderCountryList>
        </div>
      </div>
    </StyledCountryDetail>
  );
};

export default CountryDetail;
