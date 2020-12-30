import React from "react";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import store from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
