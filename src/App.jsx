import React from "react";
import "./App.css";
import HomePage from "./Component/HomePage";
import { Route, Routes } from "react-router-dom";
import SecondPage from "./Component/Secondpage";

function App() {
  return (
    <div className="WorkSection">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
