import React from "react";
// Routing
import { Routes, Route } from "react-router-dom";
// Styles
import "./styles/css/App.css";
// Components
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
import Chart from "./components/chart/Chart";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/chartView" element={<Chart />} />
      </Routes>
    </div>
  );
};

export default App;
