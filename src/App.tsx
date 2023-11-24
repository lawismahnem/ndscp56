import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
