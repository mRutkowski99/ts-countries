import GlobalStyle from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { AppContextProvider } from "./store/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Theme>
        <GlobalStyle />
        <Header />
        <Home />
      </Theme>
    </AppContextProvider>
  );
}

export default App;
