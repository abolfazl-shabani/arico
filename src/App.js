import React from "react";
import Scene from "./scene";
import Navigation from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Main } from "./styles";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Heroes from "./pages/heroes";
import News from "./pages/news";
import ThreeTEST from "./pages/test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Main>
          <Container>
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<Home />} />
              <Route path="heroes" element={<Heroes />} />
              <Route path="news" element={<News />} />
              <Route path="test-3D" element={<ThreeTEST />} />
            </Routes>
          </Container>
        </Main>
        <div
          style={{
            width: "150%",
            height: "650px",
            backgroundColor: "rgba(0,0,0,.3764705882)",
            position: "absolute",
            transform: "skewY(-45deg) translateX(-50vw)",
            overflow: "hidden",
          }}
        />
        <Scene />
      </BrowserRouter>
    </>
  );
}

export default App;
