import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import ResumeHandler from "../components/ResumeHandler";
import TextExtractor from "../components/TextExtractor";
import { toggleDarkMode as toggleDarkModeAction } from "../skillMatchSlice"; // Import action
import { Link } from "react-router-dom";
import Bgc from "./bgc";

function Homepage() {
  const isDarkMode = useSelector((state) => state.skillMatch.isDarkMode); // Access dark mode state from Redux
  const resumetext = useSelector((state) => state.skillMatch.resumeText);
  const dispatch = useDispatch();

  const handleResumeUpload = (fileName) => {
    console.log("Uploaded Resume Text:", resumetext);
    console.log("Uploaded File Name:", fileName);
  };

  const handleAnalyzeResult = (result) => {
    console.log("Analysis Result:", result);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {" "}
      {/* Apply dark mode class based on state */}
      <div className="relative flex flex-col  items-center justify-between px-4 pb-2 text-center w-full h-full">
        {/* Header */}
        <div className="flex justify-between items-center w-full px-4 py-2">
          <h1 className="text-sm font-bold text-gray-900 dark:text-white">
            SkillMatch
          </h1>
          <button
            className="text-lg font-bold text-gray-900 dark:text-white"
            onClick={() => console.log("Help icon clicked")}
          >
            ?
          </button>
        </div>

        {/* Gradient Background */}
        <Bgc />
        

        {/* Main Content */}
        <div className="w-full flex-1 flex flex-col mt-7 items-center justify-center">
          <p className="text-xl font-semibold text-black-900 dark:text-white mb-2">
            Your Ultimate Job Search Companion
          </p>
          <p
            style={{ fontSize: "15px" }}
            className="text-black-900 dark:text-white mb-6"
          >
            Works on Any Site, Matches Resume Keywords, Tracks Skills, and
            Generates Perfect <strong>Cover Letters</strong> for Students!
          </p>

          {/* Analyze Button */}
          <div className="mt-6 font-semibold">
            <Link to="/analyze">
              <TextExtractor
                buttonLabel="Analyze Now"
                buttonStyle={{
                  backgroundColor: "#4F46E5",
                  color: "#FFF",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
                onResult={handleAnalyzeResult}
              />
            </Link>
          </div>

          {/* Resume Upload Section */}
          <div className="font-semibold ">
            <ResumeHandler
              title="Upload Resume"
              buttonStyle={{
                backgroundColor: "",
                color: "#4F46E5",
                border: "1px solid #4F46E5",
                borderRadius: "4px",
                padding: "6px 12px",
                fontSize: "13px",
              }}
              onUpload={handleResumeUpload}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
