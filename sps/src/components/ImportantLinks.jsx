import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const ImportantLinks = () => {
  return (
    <nav role="navigation" aria-label="Important links">
      <ul className="md:flex md:flex-row flex-col justify-between items-center gap-5 cursor-pointer p-3 text-green-600 text-[14px] uppercase font-bold text-center">
        <li>
          <RouterLink
            to="/aboutus"
            aria-label="About us"
            className="hover:scale-110 transition-transform transform m-2"
          >
            About us
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/academics"
            aria-label="Academics"
            className="hover:scale-110 transition-transform transform m-2"
          >
            Academics
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/admissions"
            aria-label="Admissions"
            className="hover:scale-110 transition-transform transform m-2"
          >
            Admissions
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/faculty"
            aria-label="Faculty"
            className="hover:scale-110 transition-transform transform m-2"
          >
            Faculty
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/students"
            aria-label="Students"
            className="hover:scale-110 transition-transform transform m-2"
          >
            Students
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/gallery"
            aria-label="Gallery"
            className="hover:scale-110 transition-transform transform m-2"
          >
            Gallery
          </RouterLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            aria-label="Contact Us"
            className="hover:scale-110 transition-transform transform m-2"
          >
            Contact Us
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default ImportantLinks;
