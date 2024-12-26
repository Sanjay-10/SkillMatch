import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bgc from "../components/Bgc";
import InfoSection from "../components/infoBox";
import Header from "../components/Header";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Quote from "inspirational-quotes";

function Analyze() {
  const {
    resumeText,
    fileName,
    result,
    isDarkMode,
    resumeLoading,
    geminiLoading,
  } = useSelector((state) => state.skillMatch);

  // Fetch random quote
  const randomQuote = Quote.getRandomQuote();

  return (
    <div style={{ width: "330px", height: "430px", overflowY: "scroll" }} className="pb-4">
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
            
            <div className="flex justify-center items-center h-full">
              
              <div className="quote-container">
              <p className="text-sm text-center text-blue-600 dark:text-white">
              Please wait, your data is processing...
              </p>
                <p className="text-lg font-semibold text-center text-blue-800 dark:text-white">
                  {randomQuote}
                </p>
              </div>
            </div>
          ) : (

      <div className={`${isDarkMode ? "dark" : ""} flex items-center justify-center`}>
        <div className="relative dark:bg-gray-800 w-full h-full p-3 text-left">
    

          {/* Conditionally show loader or content */}
         
            <div> 
              {/* Percentage Centered */}
              <div className="flex justify-center items-center mb-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-blue-800 rounded-full bg-[] dark:bg-gray-700">
                  <span className="text-xl font-bold text-blue-800 dark:text-white">
                    {result.percentageMatch}
                  </span>
                </div>
                <div className="ml-2 text-lg font-semibold text-blue-800 dark:text-gray-300">
                  %
                </div>
              </div>

              {/* Missing Skills */}
              <InfoSection title="Missing Keywords" value={result.missingSkills.join(", ")} />

              {/* Job Details */}
              <InfoSection title="Job Title" value={result.jobDetails.jobTitle} />

              {/* Start Date and Tenure */}
              <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                <InfoSection title="Start Date" value={result.jobDetails.startDate} />
                <InfoSection title="Job Type" value={result.jobDetails.jobType} />
              </div>

              {/* Salary and Experience */}
              <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                <InfoSection title="Salary" value={result.jobDetails.salary} />
                <InfoSection title="Experience" value={result.jobDetails.experience} />
              </div>

              {/* Location */}
              <InfoSection title="Location" value={result.jobDetails.location} />

              {/* Responsibilities */}
              <InfoSection title="Responsibilities" value={result.jobDetails.responsibilities} />
            </div>
        </div>

      </div>
      )}

{!geminiLoading && (
      <div className="flex justify-center items-center">
        <Link to="/detailed-overview" target="_blank">
          <button className="text-[13px] px-4 py-2 bg-blue-600 rounded-[4px] text-white font-medium tracking-wider ">
            Detailed Overview
            <ArrowBackIosNewRoundedIcon style={{ marginLeft: "10px", rotate: "180deg", fontSize: "14px" }} />
          </button>
        </Link>
      </div>
)}

    </div>
  );
}

export default Analyze;
