import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./css/styles.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
