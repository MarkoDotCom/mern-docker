import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";

ReactDOM.render(
  <CssVarsProvider>
    <Router>
      <App />
    </Router>
  </CssVarsProvider>,
  document.getElementById("root")
);
