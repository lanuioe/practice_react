import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter basename="/">
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
