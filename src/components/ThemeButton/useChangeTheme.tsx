import { useContext } from "react";
import AppContext from "../../store/AppContext";

const useChangeTheme = () => {
  const context = useContext(AppContext);

  const changeModeHandler = () => context.toggleMode();

  return {
    btnText: context.lightMode ? "Light Mode" : "Dark Mode",
    changeModeHandler,
  };
};

export default useChangeTheme;
