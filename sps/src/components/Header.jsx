import React, { useState } from "react";
import ImportantLinks from "./ImportantLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import "animate.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="relative z-10">
      <nav className="flex justify-between items-center p-1 gap-5 shadow-md w-screen md:h-[15vh] h-[10vh] bg-white" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-around gap-2 md:h-[70%] h-[50%]">
          <img
            className="object-contain h-[90%]"
            src="https://placehold.co/600x400?text=Logo"
            alt="Spring Dale Public School Logo"
          />
          <span>
            <h1 className="uppercase font-bold text-green-800">
              Spring Dale Public School
            </h1>
          </span>
        </div>
        <div className="md:flex hidden" role="menu" aria-label="Important Links">
          <ImportantLinks />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            className="p-2"
          >
            <GiHamburgerMenu />
          </button>
          {menu && (
            <div
              id="mobile-menu"
              className={`z-[-2] absolute right-0 w-full top-full mt-2 bg-white shadow-lg rounded-md p-4 animate__animated ${
                menu ? "animate__backInDown" : "animate__backOutUp"
              }`}
              role="menu"
              aria-label="Mobile menu"
            >
              <ImportantLinks />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
