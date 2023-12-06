import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Create from "./pages/Create.jsx";
import "./index.css";
import { Button, createTheme, ThemeProvider, colors, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    orange: "#FA001C",
    plain: "#FBF3F2",
    blue: "#1C768F",
    dark: "#032539"
  },
});

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
