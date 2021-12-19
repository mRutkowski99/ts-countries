import { StyledPage } from "../Page.styled";
import Form from "../../layout/Form/Form";
import Countries from "../../layout/Countries/Countries";

const Home: React.FC = () => {
  return (
    <StyledPage>
      <Form />
      <Countries />
    </StyledPage>
  );
};

export default Home;
