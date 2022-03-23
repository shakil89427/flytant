import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreProvider from "./Store/StoreProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
