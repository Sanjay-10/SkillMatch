import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Bgc from "../components/Bgc";
import InfoSection from "../components/infoBox";
import Header from "../components/Header";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Loader from "../components/Loader/Loader";
import { setResumeLoading } from "../skillMatchSlice";
import { useEffect } from "react";

function Analyze() {
  const navigate = useNavigate();
  const { result, isDarkMode, geminiLoading, resumeText, jobDescription } = useSelector((state) => state.skillMatch);

  const resumeLoadingOff = () => {
    setResumeLoading(false);
  };

  const overviewPage = async () => {  
    try {
      const response = await fetch("http://localhost:5000/gemini/detailedOverview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jobDescription, extensionResult: result }),
      });

      if (response.ok) {
        const data = await response.json();
        // Navigate to the overview page with the processed result
        window.open(
          `http://localhost:5173/overview?data=${encodeURIComponent(JSON.stringify(data))}`,
          "_blank"
        );
      } else {
        console.error("Failed to fetch detailed overview");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    resumeLoadingOff();
    if (result?.error || !result) {
      navigate("/");
    }
  }, [result, navigate]);

  return (
    <div style={{ width: "330px", height: "430px", overflowY: "scroll" }} className="pb-4 px-1">
      <div className="flex items-center w-full">
        <div className="flex-shrink-0">
          <Link to="/">
            <ArrowBackIosNewRoundedIcon style={{ fontSize: "17px", marginLeft: "6px" }} />
          </Link>
        </div>
        <div className="flex-grow font-medium text-lg ">
          <Header />
        </div>
      </div>
      <Bgc />
      <Bgc />
      {geminiLoading ? (
        <div className="flex flex-col mt-16 items-center h-full space-y-4 mb-10 px-6">
          <p className="text-center font-medium mb-5 text-lg text-[#163a61]">
            Analyzing your data... Please hold on for a moment.
          </p>
          <div>
            <Loader />
          </div>
        </div>
      ) : (
        <div className={`${isDarkMode ? "dark" : ""} flex items-center justify-center`}>
          <div className="relative dark:bg-gray-800 w-full h-full p-3 text-left">
            <div>
              <div className="flex justify-center items-center mb-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-blue-800 rounded-full dark:bg-gray-700">
                  <span className="text-xl font-bold text-blue-800 dark:text-white">
                    {result.percentageMatch}
                  </span>
                </div>
                <div className="ml-2 text-lg font-semibold text-blue-800 dark:text-gray-300">
                  % Keywords Match
                </div>
              </div>
              <InfoSection title="Missing Keywords" value={result.missingSkills.join(", ")} />
              <InfoSection title="Job Title" value={result.jobDetails.jobTitle} />
              <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                <InfoSection title="Start Date" value={result.jobDetails.startDate} />
                <InfoSection title="Job Type" value={result.jobDetails.jobType} />
              </div>
              <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                <InfoSection title="Salary" value={result.jobDetails.salary} />
                <InfoSection title="Experience" value={result.jobDetails.experience} />
              </div>
              <InfoSection title="Location" value={result.jobDetails.location} />
              <InfoSection title="Responsibilities" value={result.jobDetails.responsibilities} />
            </div>
          </div>
        </div>
      )}
      {!geminiLoading && (
        <div className="flex justify-center items-center">
          
            <button onClick={overviewPage} className="text-[13px] px-4 py-2 bg-blue-600 rounded-[4px] text-white font-medium tracking-wider">
              Detailed Overview
              <ArrowBackIosNewRoundedIcon style={{ marginLeft: "10px", rotate: "180deg", fontSize: "14px" }} />
            </button>
          
        </div>
      )}
    </div>
  );
}

export default Analyze;
