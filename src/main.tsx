import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme.tsx";

import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </NextUIProvider>
  </StrictMode>
);
