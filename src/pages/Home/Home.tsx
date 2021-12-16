import { StyledHome } from "./Home.styled";
import Form from "../../layout/Form/Form";
import Countries from "../../layout/Countries/Countries";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Form />
      <Countries />
    </StyledHome>
  );
};

export default Home;
