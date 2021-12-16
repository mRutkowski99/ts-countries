import { useState } from "react";

const useDropdown = () => {
  const [listOpened, setListOpened] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");

  const toggleList: () => void = () => setListOpened((prev) => !prev);

  const chooseFromList: (id: string) => void = (id) => {
    const selectedOption = id[0].toUpperCase() + id.slice(1);
    setSelected(selectedOption);
    setListOpened(false);
  };

  return {
    listOpened,
    selected,
    toggleList,
    chooseFromList,
  };
};

export default useDropdown;
