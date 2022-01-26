import React from "react";
// Routing
import { Routes, Route } from "react-router-dom";
// Styles
import "./styles/css/App.css";
// Components
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
import Chart from "./components/chart/Chart";
import AppContextProvider from "./context/appContext";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <AppContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/chartView" element={<Chart />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
};

export default App;
