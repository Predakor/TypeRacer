import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { StrictMode } from "preact/compat";

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.querySelector("#root") as HTMLElement
);
