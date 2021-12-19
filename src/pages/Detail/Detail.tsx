import { StyledPage } from "../Page.styled";
import NavButton from "../../components/NavButton/NavButton";
import { ReactComponent as IconArrow } from "../../assets/arrow-long-left.svg";
import DetailInfo from "../../layout/DetailInfo/DetailInfo";

const Detail = () => {
  return (
    <StyledPage>
      <div>
        <NavButton>
          <IconArrow />
          <span>Back</span>
        </NavButton>
      </div>
      <DetailInfo />
    </StyledPage>
  );
};

export default Detail;
