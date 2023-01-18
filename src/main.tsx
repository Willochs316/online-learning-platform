import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1c1d1f",
    },
    secondary: {
      main: "#1c1d1f",
      light: "#6a6f73",
      contrastText: "#5624d0",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
      color: "#1c1d1f",
      fontWeight: 400,
    },
    body1: {
      fontWeight: 700,
    },
    button: {
      fontStyle: "italic",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
