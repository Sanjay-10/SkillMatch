import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bgc from "../components/Bgc";
import InfoSection from "../components/infoBox";

function Analyze() {

  const {resumeText, fileName, result, isDarkMode, resumeLoading, geminiLoading } = useSelector((state) => state.skillMatch);

  if ( !geminiLoading) {
  return (

    

    <div className={`${isDarkMode ? "dark" : ""} flex items-center justify-center`}
      // style={{ width: "330px", height: "430px" }} // Reduced by 30%
    >
      
      <div className="relative  dark:bg-gray-800  w-full h-full p-3 text-left"> {/* Reduced padding */}
        {/* Header */}
         <Bgc/>
        <div className="flex justify-between items-center mb-3"> {/* Reduced margin */}
          <h1 className="text-sm font-bold text-gray-900 dark:text-white"> {/* Reduced font size */}
            SkillMatch
          </h1>
          <button
            className="text-sm font-bold text-gray-900 dark:text-white" // Reduced font size
            onClick={() => console.log("Help icon clicked")}
          >
            ?
          </button>
         
        </div>
        
        {/* Percentage Centered */}
        <div className="flex justify-center items-center mb-3"> {/* Reduced margin */}
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#4F46E5] dark:bg-gray-700"> {/* Reduced size */}
            <span className="text-sm font-bold text-white dark:text-white"> {/* Reduced font size */}
            {result.percentageMatch}
            </span>
          </div>
        </div>

        {/* Missing Skills */}
        <InfoSection
        title="Missing Skills"
        value={result.missingSkills}
        />


        {/* Job Details */}
        <InfoSection
        title="Job Title"
        value={result.jobDetails.jobTitle}
        />

        {/* Start Date and Tenure */}
        <div className="grid grid-cols-2 gap-1.5 mb-1.5"> {/* Reduced gap and margin */}
         
         <InfoSection 
        title="Start Date"
        value={result.jobDetails.coOpStartDate}
        />
        <InfoSection
        title="Tenure"
        value={result.jobDetails.jobDuration || null}
        />
        </div>

        {/* Salary and Experience */}
        <div className="grid grid-cols-2 gap-1.5 mb-1.5"> {/* Reduced gap and margin */}
          
        <InfoSection 
        title="Salary" 
        value={result.jobDetails.salary}
         />
        <InfoSection
        title="Experience"
        value={result.jobDetails.experience}
        />
        </div>

        {/* Location */}
        <InfoSection 
        title="Location" 
        value={result.jobDetails.location}
        />

        {/* Responsibilities */}
        {/* <InfoSection 
        title="Responsibilities" 
        value=" Develop scalable software solutions, collaborate with cross-functional teams, and optimize system performance." 
        /> */}

      </div>
    </div>
  );
}
}

export default Analyze;
