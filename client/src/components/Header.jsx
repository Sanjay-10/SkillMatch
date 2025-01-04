import React from "react";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
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
      <a href='https://skill-match-dashboard.vercel.app/contact' target="_blank" rel="noopener noreferrer" >

        <ContactSupportIcon style={{ fontSize: "28px"  }} />
        </a> 
      </div>

    </div>
  );
}

export default Header;
