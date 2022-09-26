import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { unstable_createMuiStrictModeTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
const theme = createTheme();

// Sentry.init({
//   dsn: "https://21f1a0dc38834e98a786fd70e266fb02@o393521.ingest.sentry.io/6709636",
//   integrations: [new BrowserTracing()],
//   tracesSampleRate: 1.0,
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ScopedCssBaseline>
        <ThemeProvider theme={theme}>
          <Router>
            <App></App>
          </Router>
        </ThemeProvider>
      </ScopedCssBaseline>
    </StyledEngineProvider>
  </React.StrictMode>
);
