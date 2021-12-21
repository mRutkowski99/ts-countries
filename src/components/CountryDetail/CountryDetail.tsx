import {
  StyledCountryDetail,
  FlagContainer,
  ListsContainer,
  InfoList,
  BorderCountryList,
} from "./CountryDetail.styled";
import NavButton from "../NavButton/NavButton";
import { ICountryDetail } from "../../constants/interfaces";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonColor from "../../utilities/SkeletonColor";

const CountryDetail = ({
  countryDetail,
}: {
  countryDetail: ICountryDetail;
}) => {
  return (
    <StyledCountryDetail>
      <SkeletonColor>
        <FlagContainer>
          {countryDetail.flag ? (
            <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} />
          ) : (
            <Skeleton height={300} />
          )}
        </FlagContainer>
        <div>
          <h2>{countryDetail.name || <Skeleton height={20} />}</h2>
          <ListsContainer>
            <InfoList>
              <li>
                <h3>Native Name:</h3>
                <span>
                  {countryDetail.nativeName || <Skeleton width={100} />}
                </span>
              </li>
              <li>
                <h3>Population:</h3>
                <span>
                  {countryDetail.population || <Skeleton width={100} />}
                </span>
              </li>
              <li>
                <h3>Region:</h3>
                <span>{countryDetail.region || <Skeleton width={100} />}</span>
              </li>
              <li>
                <h3>Sub Region:</h3>
                <span>
                  {countryDetail.subRegion || <Skeleton width={100} />}
                </span>
              </li>
              <li>
                <h3>Capital:</h3>
                <span>{countryDetail.capital || <Skeleton width={100} />}</span>
              </li>
            </InfoList>
            <InfoList>
              <li>
                <h3>Top Level Domain:</h3>
                <span>{countryDetail.domain || <Skeleton width={100} />}</span>
              </li>
              <li>
                <h3>Currencies:</h3>
                <span>
                  {countryDetail.currencies || <Skeleton width={100} />}
                </span>
              </li>
              <li>
                <h3>Languages:</h3>
                <span>
                  {countryDetail.languages || <Skeleton width={100} />}
                </span>
              </li>
            </InfoList>
          </ListsContainer>
          <div>
            <h3>Border Countries:</h3>
            <BorderCountryList>
              {countryDetail.borderCountries?.map((border, idx) => (
                <li key={idx}>
                  <NavButton to={`/${border.toLowerCase()}`}>
                    {border}
                  </NavButton>
                </li>
              )) || <Skeleton width={400} />}
            </BorderCountryList>
          </div>
        </div>
      </SkeletonColor>
    </StyledCountryDetail>
  );
};

export default CountryDetail;
