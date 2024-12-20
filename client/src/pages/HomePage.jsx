import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import ResumeHandler from "../components/ResumeHandler";
import TextExtractor from "../components/TextExtractor";
import { toggleDarkMode as toggleDarkModeAction } from "../skillMatchSlice"; // Import action
import { Link } from "react-router-dom";

function Homepage() {
  const isDarkMode = useSelector((state) => state.skillMatch.isDarkMode); // Access dark mode state from Redux
  const resumetext = useSelector((state) => state.skillMatch.resumeText);
  const dispatch = useDispatch();

  const onToggleDarkMode = () => {
    dispatch(toggleDarkModeAction()); // Dispatch action to toggle dark mode in Redux
  };

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

        {/* Dark/Light Mode Toggle Button */}
        {/* <div className="flex justify-center mt-4">
          <button
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded"
            onClick={onToggleDarkMode}
          >
            Toggle Dark Mode
          </button>
        </div> */}

        {/* Gradient Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 30.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              backgroundColor: "#000000", // Set background to black for dark mode
            }}
            className={`relative left-[calc(60%-1rem)] aspect-[1055/678] w-[46.125rem] -translate-x-1/2 rotate-[40deg] ${
              isDarkMode
                ? "bg-[#1C1C1E]"
                : "bg-gradient-to-tr from-[#5770fcdf] to-[#af11f8]"
            } opacity-40 sm:left-[calc(80%-20rem)] sm:w-[77.1875rem]`}
          ></div>
        </div>

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

        {/* Bottom Gradient */}

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 30.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              backgroundColor: "#000000", // Set background to black for dark mode
            }}
            className={`relative left-[calc(60%-1rem)] aspect-[1055/678] w-[46.125rem] -translate-x-1/2 rotate-[60deg] ${
              isDarkMode
                ? "bg-[#1C1C1E]"
                : "bg-gradient-to-tr from-[#5770fcdf] to-[#af11f8]"
            } opacity-20 sm:left-[calc(80%-20rem)] sm:w-[77.1875rem]`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
