import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { toggleDarkMode } from './/skillMatchSlice'; // Adjust path as needed
import Homepage from "./pages/Homepage";
import AnalyzePage from "./pages/Analyze";
import Detailed from "./pages/DetailedPage";

function App() {
  const isDarkMode = useSelector((state) => state.skillMatch.isDarkMode); // Access dark mode state
  const dispatch = useDispatch();

  // Toggle dark mode on button click
  const handleThemeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}> {/* Conditionally apply dark class */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="detailed-overview" element={<Detailed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
