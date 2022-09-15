import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./css/styles.css";

import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
