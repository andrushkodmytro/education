import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MathLevels from "./pages/Math/MathLevels/MathLevels";
import Container from "@mui/material/Container";
import AppBar from "./Containers/AppBar/AppBar";
import Math from "./pages/Math/Math";
import Statistics from "./pages/Statistics/Statistics";
import theme from "./theme";
import "./App.css";

export default function Parent() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBar></AppBar>
        <Container style={{ flex: 1, padding: "40px 24px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/math" element={<MathLevels />} />
            <Route exact path="math/operations/:levelId" element={<Math />} />

            <Route
              exact
              path="math/operations/:levelId/statistics"
              element={<Statistics />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
