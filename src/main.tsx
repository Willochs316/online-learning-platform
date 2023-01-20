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
    h1: {
      fontSize: "32px",
      // fontFamily:
      //   "SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol",
      fontWeight: 700,
      margin: 0,
      lineHeight: 1.25,
      letterSpacing: "-0.5px",
      display: "flex",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "normal",
      maxWidth: "800px",
      marginBottom: "8px",
      minWidth: "initial",
      padding: 0,
    },

    h2: {
      fontSize: "32px",
      fontWeight: 700,
      fontFamily:
        "SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol",
    },

    subtitle1: {
      fontSize: 16,
      color: "#1c1d1f",
      fontWeight: 400,
      fontFamily:
        "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
    },

    subtitle2: {
      fontSize: 16,
      color: "#1c1d1f",
      fontWeight: 700,
      fontFamily:
        "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
    },

    body1: {
      fontSize: 24,
      color: "#1c1d1f",
      fontWeight: 700,
      fontFamily:
        "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
      // fontFamily:
      //   "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
    },
    button: {
      fontStyle: "normal",
      fontFamily:
        "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
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
