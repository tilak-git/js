import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
