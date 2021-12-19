import { useState, useContext, useEffect } from "react";
import AppContext from "../../store/AppContext";

const useDropdown = () => {
  const context = useContext(AppContext);
  const [listOpened, setListOpened] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");

  const toggleList: () => void = () => setListOpened((prev) => !prev);

  const chooseFromList: (id: string) => void = (id) => {
    const selectedOption = id[0].toUpperCase() + id.slice(1);
    setSelected(selectedOption);
    setListOpened(false);
    context.setRegion(id);
  };

  useEffect(() => {
    if (context.endPoint.includes("name")) setSelected("Filter by Region");
  }, [context.endPoint]);

  return {
    listOpened,
    selected,
    toggleList,
    chooseFromList,
  };
};

export default useDropdown;
