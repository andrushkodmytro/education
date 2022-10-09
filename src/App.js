import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MathLevels from "./pages/Math/MathLevels/MathLevels";
import Container from "@mui/material/Container";
import AppBar from "./Containers/AppBar/AppBar";
import Math from "./pages/Math/Math";
import English from "./pages/English/English";
import Statistics from "./pages/Statistics/Statistics";
import AlphabetLearn from "./pages/AlphabetLearn/AlphabetLearn";
// import AlphabetTest from "./pages/AlphabetTest/AlphabetTest";
import NumbersLearn from "./pages/NumbersLearn";
import Days from "./pages/Days";
import Fruits from "./pages/Fruits";
import FruitsTest from "./pages/FruitsTest";
import Lessons from "./pages/Lessons";
import LessonsTest from "./pages/LessonsTest";
import { lesson_8_10_2022 } from "./pages/LessonsTest/utils";
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
            <Route exact path="/english" element={<English />} />
            <Route
              exact
              path="/english/alphabet/learn"
              element={<AlphabetLearn />}
            />
            {/* <Route exact path="/english/alphabet/test" element={<AlphabetTest />} /> */}
            <Route
              exact
              path="/english/numbers/learn"
              element={<NumbersLearn />}
            />
            <Route exact path="/english/days/learn" element={<Days />} />
            <Route exact path="/english/fruits/learn" element={<Fruits />} />
            <Route exact path="/english/fruits/test" element={<FruitsTest />} />
            <Route exact path="/english/lessons" element={<Lessons />} />
            <Route
              exact
              path="/english/lessons/08-10-2022"
              element={<LessonsTest data={lesson_8_10_2022} />}
            />
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
