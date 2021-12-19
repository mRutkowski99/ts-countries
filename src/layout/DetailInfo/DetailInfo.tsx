import NavButton from "../../components/NavButton/NavButton";
import {
  StyledDetailInfo,
  FlagContainer,
  ListsContainer,
  InfoList,
  BorderCountryList,
} from "./DetailInfo.styled";

const DetailInfo = () => {
  return (
    <StyledDetailInfo>
      <FlagContainer>
        <img src="https://flagcdn.com/mt.svg" alt="" />
      </FlagContainer>
      <div>
        <h2>Belgium</h2>
        <ListsContainer>
          <InfoList>
            <li>
              <h3>Native Name:</h3>
              <span>Belgie</span>
            </li>
            <li>
              <h3>Population:</h3>
              <span>10,153,100</span>
            </li>
            <li>
              <h3>Region:</h3>
              <span>Europe</span>
            </li>
            <li>
              <h3>Sub Region:</h3>
              <span>Western Europe</span>
            </li>
            <li>
              <h3>Capital:</h3>
              <span>Brussels</span>
            </li>
          </InfoList>
          <InfoList>
            <li>
              <h3>Top Level Domain:</h3>
              <span>.be</span>
            </li>
            <li>
              <h3>Currencies:</h3>
              <span>Euro</span>
            </li>
            <li>
              <h3>Languages:</h3>
              <span>Dutch, French, German</span>
            </li>
          </InfoList>
        </ListsContainer>
        <div>
          <h3>Border Countries:</h3>
          <BorderCountryList>
            <li>
              <NavButton>France</NavButton>
            </li>
            <li>
              <NavButton>Germany</NavButton>
            </li>
            <li>
              <NavButton>Netherlands</NavButton>
            </li>
          </BorderCountryList>
        </div>
      </div>
    </StyledDetailInfo>
  );
};

export default DetailInfo;
