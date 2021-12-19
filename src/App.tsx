import GlobalStyle from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import { AppContextProvider } from "./store/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Theme>
        <GlobalStyle />
        <Header />
        <Detail />
      </Theme>
    </AppContextProvider>
  );
}

export default App;
