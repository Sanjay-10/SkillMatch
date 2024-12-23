import React from "react";

function infoBox({ title, value }) {
return (
    <div className="mb-1.5 ">
        <h3 className="text-xs font-bold text-black-900 dark:text-gray-300">
            {title}
            </h3>
        <div className="mt-0.2 w-full border-[1px] border-[#4F46E5] rounded-[4px] bg-[#] dark:bg-gray-700 p-1.5 text-xs text-[#4F46E5] dark:text-gray-400 font-bold">
            {value}
        </div>
    </div>
    )
};

export default infoBox;