import { Global } from "@emotion/react";
import gStyle from "./styles/GlobalStyles";
import Router from "./Router";

function App() {
  return (
    <>
      <Global styles={gStyle} />
      <Router />
    </>
  );
}

export default App;
