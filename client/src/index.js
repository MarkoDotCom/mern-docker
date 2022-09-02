import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { unstable_createMuiStrictModeTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

Sentry.init({
  dsn: "https://21f1a0dc38834e98a786fd70e266fb02@o393521.ingest.sentry.io/6709636",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const theme = unstable_createMuiStrictModeTheme();

ReactDOM.render(
  <React.StrictMode>
    <CssVarsProvider>
      <Router>
        <App />
      </Router>
    </CssVarsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
