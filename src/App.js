import Body from "./components/Body";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <GlobalStyle>
      <Header />
      <Body />
      <Footer />
    </GlobalStyle>
  );
}

export default App;
