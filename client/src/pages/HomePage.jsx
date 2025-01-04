import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks
import ResumeHandler from "../components/ResumeHandler";
import TextExtractor from "../components/TextExtractor";
import { Link } from "react-router-dom";
import Bgc from "../components/Bgc";
import Header from "../components/Header";
import fail from "../assets/failed.png";
import { setGeminiLoading, setResumeError } from "../skillMatchSlice";
import { useEffect } from "react";

function Homepage() {
  
  const isDarkMode = useSelector((state) => state.skillMatch.isDarkMode); // Access dark mode state from Redux
  const { fileName, resumeError } = useSelector((state) => state.skillMatch);

  const dispatch = useDispatch(); 
  useEffect (() => {
    dispatch(setGeminiLoading(false));
    dispatch(setResumeError(false));
  }, [dispatch]);

  return (
    <div
      className={isDarkMode ? "dark" : ""}
      style={{ width: "330px", height: "430px", overflow: "hidden" }}
    >
      {/* Success or Failure Alert */}
      {resumeError == true && (
        <div className="fixed top-4 right-4 flex items-center gap-4 p-2 rounded shadow bg-red-100 text-red-800">
          <img src={fail} alt={"Error"} className="w-5 h-5" />
          <span>{"Please try again."}</span>
        </div>
      )}

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
          {fileName && (
            <div className="mt-6 font-semibold w-full">
              <Link to="/analyze" className="w-full ">
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
                />
              </Link>
            </div>
          )}

          {/* Resume Upload Section */}
          {fileName ? (
            <div className="font-semibold mt-3">
              <ResumeHandler
                title="Change Resume"
                labelStyle={{
                  hover: "bold",
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  color: "#007bff",
                  border: "1px solid #007bff",
                  borderRadius: "99px",
                  padding: "6px 12px",
                  fontSize: "14px",
                  hover: {
                    backgroundColor: "white",
                  },
                  // width: "100%",
                }}
              />
            </div>
          ) : (
            <div className="font-semibold mt-3">
              <ResumeHandler
                title="Add Resume"
                labelStyle={{
                  backgroundColor: "white",
                  color: "#007bff",
                  border: "1px solid #007bff",
                  borderRadius: "99px",
                  padding: "6px 12px",
                  fontSize: "14px",
                  // width: "100%",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
