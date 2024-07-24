import React, { useRef} from "react";
import Caraousell from "../components/Caraousel";
import ImportantLinks from "../components/ImportantLinks";
import buses from "../assets/download.jpeg";

import 'animate.css'

const Home = () => {
  const eventsRef = useRef(null);

  const scrollToEvents = () => {
    if (eventsRef.current) {
      eventsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div className="w-screen p-2 flex justify-around flex-col items-center gap-4">
      <div className="reveal h-[90vh] flex flex-col justify-center items-center  w-full p-5 rounded-lg bg-green-600">
        <h1 className="text-bold text-[30px] text-center text-white">
          "Welcome to Springdale Public School, where we nurture young minds for
          a brighter future."
        </h1>
        <button
          className="px-3 py-2 bg-green-500 rounded-lg text-center text-white mt-10"
          onClick={scrollToEvents}
        >
          Scroll For more
        </button>
      </div>

      <div
        ref={eventsRef}
        className=" reveal h-[100vh] w-[full] flex flex-col justify-center items-center  p-5 rounded-lg "
      >
        <h1 className="text-[30px] uppercase text-green-800 font-bold m-5">
          Events
        </h1>
        <div className="h-[70%]">
          <Caraousell />
        </div>
      </div>

      <div className="reveal md:h-[20vh] h-[30vh] flex flex-col justify-center items-center  p-5 rounded-lg w-full m-6">
        <h1 className="uppercase text-green-900 font-bold text-[30px] m-10">PAGES</h1>
        <ImportantLinks />
      </div>

      <div className="relative h-[50vh]  w-full shadow-md rounded-lg  m-6  text-white">
        <img className="reveal object-fill h-full w-full rounded-lg" src={buses} alt="buses" />
        <div className="reveal absolute top-0 left-0 h-full w-full bg-white bg-opacity-40 flex flex-col justify-around items-center rounded-lg">
          <h1 className=" reveal uppercase font-bold text-2xl text-green-800 ">
            Springdale Public School
          </h1>
          <div className="reveal md:flex-row flex flex-col justify-center md:gap-[60px] gap-5 items-center w-full text-green-800 ">
            <p className="animate__animated animate__zoomIn">XX STATES</p>
            <p className="animate__animated animate__zoomIn">XXX CITIES</p>
            <p className="animate__animated animate__zoomIn">XX YEARS</p>
            <p className="animate__animated animate__zoomIn">XXXX SCHOOLS</p>
            <p className="animate__animated animate__zoomIn">XXXXXX STAFFS</p>
            <p className="animate__animated animate__zoomIn">XXXXXXXXX STUDENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
