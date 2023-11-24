import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import About from "./pages/About";
import DashBoard from "./pages/dashboard";

// json-server --watch db.json --port 8000

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
