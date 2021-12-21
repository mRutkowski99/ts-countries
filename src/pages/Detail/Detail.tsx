import { StyledPage } from "../Page.styled";
import NavButton from "../../components/NavButton/NavButton";
import { ReactComponent as IconArrow } from "../../assets/arrow-long-left.svg";
import DetailInfo from "../../layout/DetailInfo/DetailInfo";
import { useContext } from "react";
import AppContext from "../../store/AppContext";

const Detail = () => {
  const context = useContext(AppContext);

  const returnHandler = () => context.setTextInput("");

  return (
    <StyledPage>
      <div>
        <NavButton to="/" onClick={returnHandler}>
          <IconArrow />
          <span>Back</span>
        </NavButton>
      </div>
      <DetailInfo />
    </StyledPage>
  );
};

export default Detail;
