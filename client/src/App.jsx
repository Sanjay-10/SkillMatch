import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AnalyzePage from "./pages/Analyze";

function App() {

  return (
    <div> 
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
