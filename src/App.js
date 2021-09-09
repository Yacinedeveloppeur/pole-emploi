import { Fragment } from "react";
import Body from "./components/Body";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
