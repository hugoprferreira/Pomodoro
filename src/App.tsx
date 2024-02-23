import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/themes/global";
import { Router } from "./Router";
import { CyclesContextProvider } from "./contexts/Cycle.Contest";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
