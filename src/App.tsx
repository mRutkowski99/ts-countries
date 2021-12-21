import GlobalStyle from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import { AppContextProvider } from "./store/AppContext";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AppContextProvider>
      <Theme>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Detail />} />
        </Routes>
      </Theme>
    </AppContextProvider>
  );
}

export default App;
