import React from "react";

function infoBox({ title, value }) {
return (
    <div className="mb-1.5 ">
        <h3 className="text-sm font-medium text-[#26408e] dark:text-gray-300">
            {title}
            </h3>
        <div className="mt-0.1 w-full border-[1px] shadow-[#9caee4]  border-[#aab8e2] bg-[#f3f9fc] rounded-lg  dark:bg-gray-700 p-1.5 text-[0.85rem] text-gray-700 dark:text-gray-400 font-medium">
            {value}
        </div>
    </div>
    )
};

export default infoBox;