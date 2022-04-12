import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Math from "./pages/Math/Math";
import Container from "@mui/material/Container";
import AppBar from "./Containers/AppBar/AppBar";
import "./App.css";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    background: {
      paper: "#bfffc4",
    },
  },
});

export default function Parent() {
  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <AppBar></AppBar>
        <Container style={{ flex: 1, padding: "40px 24px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/math" element={<Math />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
