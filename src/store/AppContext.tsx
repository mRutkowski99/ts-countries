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
  const [endPoint, setEndPoint] = useState("all");

  const toggleModeHandler: () => void = () => setLightMode((prev) => !prev);

  const textInputHandler: (value: string) => void = (value) => {
    if (value.length === 0) setEndPoint("all");
    if (value.length >= 3) setEndPoint("name/" + value);
  };

  const dropdownHandler: (value: string) => void = (value) =>
    setEndPoint("region/" + value);

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