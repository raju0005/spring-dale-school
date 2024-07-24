import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const ImportantLinks = () => {
  return (
    <div>
      <ul className="md:flex md:flex-row flex-col justify-between items-center gap-5 cursor-pointer p-3 text-green-800 text-[14px] uppercase font-bold text-center">
        <RouterLink to="/aboutus">
          <li className="hover:scale-110 transition-transform transform m-2">
            About us
          </li>
        </RouterLink>
        <RouterLink to="/academics">
          <li className="hover:scale-110 transition-transform transform m-2">
            Academics
          </li>
        </RouterLink>
        <RouterLink to="/admissions">
          <li className="hover:scale-110 transition-transform transform m-2">
            Admissions
          </li>
        </RouterLink>
        <RouterLink to="/faculty">
          <li className="hover:scale-110 transition-transform transform m-2">
            Faculty
          </li>
        </RouterLink>
        <RouterLink to="/students">
          <li className="hover:scale-110 transition-transform transform m-2">
            Students
          </li>
        </RouterLink>
        <RouterLink to="/gallery">
          <li className="hover:scale-110 transition-transform transform m-2">
            Gallery
          </li>
        </RouterLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          
        >
          <li className="hover:scale-110 transition-transform transform m-2">
            Contact Us
          </li>
        </ScrollLink>
      </ul>
    </div>
  );
};

export default ImportantLinks;
