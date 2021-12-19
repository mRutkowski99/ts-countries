import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import AppContext from "../store/AppContext";

const Theme: React.FC = (props) => {
  const context = useContext(AppContext);
  const isLight = context.lightMode;

  const theme = {
    colors: {
      text: isLight ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
      input: isLight ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 100%)",
      bg: isLight ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
      elements: isLight ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
    },
    fontWeights: {
      md: 300,
      bold: 600,
      xbold: 800,
    },
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
  };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
