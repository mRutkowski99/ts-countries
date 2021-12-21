import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

interface IContext {
  lightMode: boolean;
  endPoint: string;
  toggleMode: () => void;
  setTextInput: (value: string) => void;
  setRegion: (valuu: string) => void;
}

const AppContext = React.createContext<IContext>({
  lightMode: true,
  endPoint: "all",
  toggleMode: () => {},
  setTextInput: (value) => {},
  setRegion: (value) => {},
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  const [endPoint, setEndPoint] = useState("v3.1/all");

  const toggleModeHandler: () => void = () => {
    setLightMode((prev) => !prev);
    localStorage.setItem("mode", String(!lightMode));
  };

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    setLightMode(mode === "true");
  });

  const textInputHandler: (value: string) => void = (value) => {
    if (value.length === 0) setEndPoint("v3.1/all");
    if (value.length >= 3) setEndPoint("v3.1/name/" + value);
  };

  const dropdownHandler: (value: string) => void = (value) =>
    setEndPoint("v3.1/region/" + value);

  const context: IContext = {
    lightMode: lightMode,
    endPoint: endPoint,
    toggleMode: toggleModeHandler,
    setTextInput: textInputHandler,
    setRegion: dropdownHandler,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
