import { useState } from "react";

const useChangeTheme = () => {
  const [mode, setMode] = useState("lightMode");

  const changeModeHandler: () => void = () => {
    if (mode === "lightMode") setMode("darkMode");
    else setMode("lightMode");
  };

  return {
    btnText: mode === "lightMode" ? "Light Mode" : "Dark Mode",
    changeModeHandler,
  };
};

export default useChangeTheme;
