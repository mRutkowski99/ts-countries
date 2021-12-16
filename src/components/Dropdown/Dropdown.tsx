import {
  StyledDropdown,
  Selected,
  OptionsList,
  ListElement,
} from "./Dropdown.styled";
import { ReactComponent as IconDropdown } from "../../assets/chevron-down.svg";
import useDropdown from "./useDropDown";

const Dropdown: React.FC = () => {
  const { listOpened, selected, toggleList, chooseFromList } = useDropdown();

  const listClickHandler: (event: React.MouseEvent) => void = (event) => {
    const target = event.target as Element;
    chooseFromList(target.id);
  };

  return (
    <StyledDropdown>
      <Selected onClick={toggleList}>
        <span>{selected}</span>
        <IconDropdown />
      </Selected>
      {listOpened && (
        <OptionsList onClick={listClickHandler}>
          <ListElement id="africa">Africa</ListElement>
          <ListElement id="americas">Americas</ListElement>
          <ListElement id="asia">Asia</ListElement>
          <ListElement id="europe">Europe</ListElement>
          <ListElement id="oceania">Oceania</ListElement>
        </OptionsList>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
