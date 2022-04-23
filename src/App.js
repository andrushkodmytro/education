import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MathLevels from "./pages/Math/MathLevels/MathLevels";
import Container from "@mui/material/Container";
import AppBar from "./Containers/AppBar/AppBar";
import Math from "./pages/Math/Math";
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
            <Route
              exact
              path="math/operations-level-1"
              element={<Math count={27} min={0} max={10} />}
            />
            <Route
              exact
              path="math/operations-level-2"
              element={<Math count={27} min={0} max={20} />}
            />
            <Route
              exact
              path="math/operations-level-3"
              element={<Math count={27} min={0} max={30} />}
            />
            <Route
              exact
              path="math/operations-level-4"
              element={<Math count={27} min={0} max={40} />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
