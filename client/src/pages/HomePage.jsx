import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import ResumeHandler from "../components/ResumeHandler";
import TextExtractor from "../components/TextExtractor";
import { toggleDarkMode as toggleDarkModeAction } from "../skillMatchSlice"; // Import action
import { Link } from "react-router-dom";
import Bgc from "../components/Bgc";
import Header from "../components/Header";

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
    <div className={isDarkMode ? "dark" : ""}
    style={{ width: "330px", height: "430px", overflow:"hidden"}} 
    >
      
      <div className="font-medium text-lg px-5">
        <Header />
      </div>

      <div className="relative flex flex-col  items-center justify-between pb-2 px-4 text-center w-full h-full">
  
        <Bgc />
        

        {/* Main Content */}
        <div className="w-full flex-1 flex flex-col mt-7 items-center ">
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
                <div className="mt-6 font-semibold w-full">
                <Link to="/analyze" className="w-full">
                  <TextExtractor
                  buttonLabel="Analyze Now"
                  buttonStyle={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    fontSize: "16px",
                    // width: "100%",
                  }}
                  onResult={handleAnalyzeResult}
                  />
                </Link>
                </div>

                {/* Resume Upload Section */}
          <div className="font-semibold mt-3">
            <ResumeHandler
              title="Upload Resume"
              buttonStyle={{
                backgroundColor: "white",
                color: "#007bff",
                border: "1px solid #007bff",
                borderRadius: "99px",
                padding: "6px 12px",
                fontSize: "14px",
                // width: "100%",
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
