import { StyledForm } from "./Form.styled";
import TextInput from "../../components/TextInput/TextInput";
import Dropdown from "../../components/Dropdown/Dropdown";

const Form: React.FC = () => {
  return (
    <StyledForm>
      <TextInput />
      <Dropdown />
    </StyledForm>
  );
};

export default Form;
