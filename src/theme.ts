interface IMode {
  text: string;
  input: string;
  bg: string;
  elements: string;
}

interface IFontWeights {
  md: number;
  bold: number;
  xbold: number;
}

interface ITheme {
  colors: {
    lightMode: IMode;
    darkMode: IMode;
  };
  fontWeights: IFontWeights;
}

const theme: ITheme = {
  colors: {
    lightMode: {
      text: "hsl(200, 15%, 8%)",
      input: "hsl(0, 0%, 52%)",
      bg: "hsl(0, 0%, 98%)",
      elements: "hsl(0, 0%, 100%)",
    },
    darkMode: {
      text: "hsl(0, 0%, 100%)",
      input: "hsl(0, 0%, 100%)",
      bg: "hsl(207, 26%, 17%)",
      elements: "hsl(209, 23%, 22%)",
    },
  },
  fontWeights: {
    md: 300,
    bold: 600,
    xbold: 800,
  },
};

export default theme;
