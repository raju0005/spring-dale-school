import React, { useRef } from "react";
import Caraousell from "../components/Caraousel";
import ImportantLinks from "../components/ImportantLinks";
import buses from "../assets/download.jpeg";
import 'animate.css';

const Home = () => {
  const eventsRef = useRef(null);

  const scrollToEvents = () => {
    if (eventsRef.current) {
      eventsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen p-2 flex justify-around flex-col items-center gap-4">
      <section
        className="reveal h-[90vh] flex flex-col justify-center items-center w-full p-5 rounded-lg bg-green-600"
        aria-labelledby="welcome-heading"
      >
        <h1 id="welcome-heading" className="text-bold text-[30px] text-center text-white">
          "Welcome to Springdale Public School, where we nurture young minds for
          a brighter future."
        </h1>
        <button
          className="px-3 py-2 bg-green-500 rounded-lg text-center text-white mt-10"
          onClick={scrollToEvents}
          aria-label="Scroll down to view upcoming events"
        >
          Scroll For More
        </button>
      </section>

      <section
        ref={eventsRef}
        className="reveal h-[100vh] w-[full] flex flex-col justify-center items-center p-5 rounded-lg"
        aria-labelledby="events-heading"
      >
        <h1 id="events-heading" className="text-[30px] uppercase text-green-600 font-bold m-5">
          Events
        </h1>
        <div className="h-[70%]" role="region" aria-labelledby="events-carousel">
          <Caraousell />
        </div>
      </section>

      <section
        className="reveal md:h-[20vh] h-[30vh] flex flex-col justify-center items-center p-5 rounded-lg w-full m-6"
        aria-labelledby="pages-heading"
      >
        <h1 id="pages-heading" className="uppercase text-green-600 font-bold text-[30px] m-10">
          PAGES
        </h1>
        <ImportantLinks />
      </section>

      <section
        className="relative h-[50vh] w-full shadow-md rounded-lg m-6 text-white"
        aria-labelledby="school-info-heading"
      >
        <img
          className="reveal object-fill h-full w-full rounded-lg"
          src={buses}
          alt="Buses at Springdale Public School"
        />
        <div className="reveal absolute top-0 left-0 h-full w-full bg-black bg-opacity-40 flex flex-col justify-around items-center rounded-lg">
          <h1 id="school-info-heading" className="reveal uppercase font-bold text-2xl text-green-600">
            Springdale Public School
          </h1>
          <div className="reveal md:flex-row flex flex-col justify-center md:gap-[60px] gap-5 items-center w-full text-green-600">
            <p className="animate__animated animate__zoomIn" role="status" aria-live="polite">XX STATES</p>
            <p className="animate__animated animate__zoomIn" role="status" aria-live="polite">XXX CITIES</p>
            <p className="animate__animated animate__zoomIn" role="status" aria-live="polite">XX YEARS</p>
            <p className="animate__animated animate__zoomIn" role="status" aria-live="polite">XXXX SCHOOLS</p>
            <p className="animate__animated animate__zoomIn" role="status" aria-live="polite">XXXXXX STAFFS</p>
            <p className="animate__animated animate__zoomIn" role="status" aria-live="polite">XXXXXXXXX STUDENTS</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
