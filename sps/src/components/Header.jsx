import React, { useState } from "react";
import ImportantLinks from "./ImportantLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import "animate.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="relative z-10">
      <nav className="flex justify-between items-center p-1 gap-5 shadow-md w-screen md:h-[15vh] h-[10vh] bg-white">
        <div className="flex items-center justify-around gap-2 md:h-[70%] h-[50%]">
          <img
            className="object-contain h-[90%]"
            src="https://placehold.co/600x400?text=Logo"
            alt="Logo"
          />
          <span>
            <h1 className="uppercase font-bold text-green-800">
              Spring Dale Public School
            </h1>
          </span>
        </div>
        <div className="md:flex hidden">
          <ImportantLinks />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
            className="p-2"
          >
            <GiHamburgerMenu />
          </button>
          {menu && (
            <div
              className={`z-[-2] absolute right-0  w-full top-full mt-2 bg-white shadow-lg rounded-md p-4 animate__animated ${
                menu ? "animate__backInDown" : "animate__backOutUp"
              }`}
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
