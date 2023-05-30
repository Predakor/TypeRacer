import { render } from "preact";
import { StrictMode } from "preact/compat";
import App from "./App";
import "./index.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root") as HTMLElement
);
