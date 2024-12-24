import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bgc from "../components/Bgc";
import InfoSection from "../components/infoBox";
import Header from "../components/Header";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

function Analyze() {
  const {
    resumeText,
    fileName,
    result,
    isDarkMode,
    resumeLoading,
    geminiLoading,
  } = useSelector((state) => state.skillMatch);

  return (
    <div
      style={{ width: "330px", height: "430px", overflowY: "scroll" }}
      className="pb-4"
    >
      <div className="flex items-center w-full">
        <div className="flex-shrink-0">
          <Link to="/">
            <ArrowBackIosNewRoundedIcon
              style={{ fontSize: "17px", marginLeft: "6px" }}
            />
          </Link>
        </div>
        <div className="flex-grow font-medium text-lg ">
          <Header />
        </div>
      </div>
      <div
        className={`${
          isDarkMode ? "dark" : ""
        } flex items-center justify-center`}
      >
        <div className="relative dark:bg-gray-800 w-full h-full p-3 text-left">
          {/* Reduced padding */}
          {/* Header */}
          <Bgc />
          <Bgc />

          {/* Percentage Centered */}
          <div className="flex justify-center items-center mb-3">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-blue-800 rounded-full bg-[] dark:bg-gray-700">
              <span className="text-xl font-bold text-blue-800 dark:text-white">
                67
              </span>
            </div>
            <div className="ml-2 text-lg font-semibold text-blue-800 dark:text-gray-300">
              % 
            </div>
            <div>

            <div className="ml-3  text-sm  text-blue-800 dark:text-gray-300">
              Keywords
            </div>
            <div className="ml-3 text-sm  text-blue-800 dark:text-gray-300">
              Match
            </div>
            </div>
          </div>
          {/* Missing Skills */}


          <InfoSection
            title="Missing Keywords"
            value="JavaScript, React, Node.js, JavaScript, React, Node.js, JavaScript, React, Node.js"
          />
          {/* Job Details */}
          <InfoSection title="Job Title" value="Software Engineer" />
          {/* Start Date and Tenure */}
          <div className="grid grid-cols-2 gap-1.5 mb-1.5">
            <InfoSection title="Start Date" value="01/01/2023" />
            <InfoSection title="Tenure" value="2 years" />
          </div>
          {/* Salary and Experience */}
          <div className="grid grid-cols-2 gap-1.5 mb-1.5">
            <InfoSection title="Salary" value="$100,000" />
            <InfoSection title="Experience" value="5 years" />
          </div>
          {/* Location */}
          <InfoSection title="Location" value="New York, NY" />
          {/* Responsibilities */}
          {/* <InfoSection 
        title="Responsibilities" 
        value=" Develop scalable software solutions, collaborate with cross-functional teams, and optimize system performance." 
        /> */}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Link to="/detailed-overview" target="_blank">
          <button className="text-[13px] px-4 py-2 bg-blue-600 rounded-[4px] text-white font-medium tracking-wider ">
            Detailed  Overview
            <ArrowBackIosNewRoundedIcon
              style={{ marginLeft: "10px", rotate: "180deg", fontSize: "14px" }}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Analyze;
