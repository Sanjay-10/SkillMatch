import React from 'react'
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks

function Bgc() {
    const isDarkMode = useSelector((state) => state.skillMatch.isDarkMode); // Access dark mode state from Redux

  return (
    <div>
        {/*UPPER GRADIENT */}
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
                : "bg-gradient-to-tr from-[#6eaec1] to-[#5891a9]"
            } opacity-40 sm:left-[calc(80%-20rem)] sm:w-[77.1875rem]`}
          ></div>
        </div>

        {/*LOWER GRADIENT */}
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
                : "bg-gradient-to-tr from-[#749de4] to-[#4a70e5]"
            } opacity-20 sm:left-[calc(80%-20rem)] sm:w-[77.1875rem]`}
          ></div>
        </div>
    </div>
  )
}

export default Bgc