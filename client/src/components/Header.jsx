import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center w-full px-3 py-2 ">
      <div>
        <Link to="/">
          <h1 className="text-md font-bold text-gray-900 dark:text-white">
            SkillMatch
          </h1>
        </Link>
      </div>

      <div>
        <InfoIcon style={{ fontSize: "25px" }} />
      </div>

    </div>
  );
}

export default Header;
