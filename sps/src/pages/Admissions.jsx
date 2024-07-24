import React from "react";
import { CiMemoPad } from "react-icons/ci";
import { MdOutlineSelectAll } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import form from '../assets/form.pdf'

const Admissions = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-10">
      <div className="reveal relative w-screen p-2">
        <img
          className="object-fill w-full h-[300px]"
          src="https://placehold.co/10000x800/grey/grey?text="
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <h1 className=" text-green-800 font-bold uppercase text-[50px]">
            ADMIssions
          </h1>
        </div>
      </div>

      <div className="reveal w-full flex  flex-row justify-center gap-9 items-center m-3 p-5">
        <div className="reveal h-[70px]  bg-white p-3 rounded-[35px]">
          <CiMemoPad className="h-full w-full text-green-600" />
        </div>
        <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-5">
          <h1 className="text-green-600 uppercase font-bold text-center">
            Criteria
          </h1>
          <p>
            "Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades."
          </p>
        </div>
      </div>
      <div className="reveal w-full flex  flex-row justify-center gap-9 items-center m-3 p-5">
        <div className="reveal h-[70px]  bg-white p-3 rounded-[35px]">
          <MdOutlineSelectAll className="h-full w-full text-green-600" />
        </div>
        <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-5">
          <h1 className="text-green-600 uppercase font-bold text-center">
            Procedure
          </h1>
          <p>
            "Admission forms are available for download. Submit the completed
            form along with required documents at the school office."
          </p>{" "}
          <a href={form} download={form}>
            <button className="px-3 py-2 bg-green-500 rounded-lg text-white transform transition-transform hover:scale-110">
              Download
            </button>
          </a>
        </div>
      </div>
      <div className="reveal w-full flex  flex-row justify-center gap-10 items-start m-3 p-5">
        <div className="reveal h-[70px]  bg-white p-3 rounded-[35px]">
          <FaCalendarAlt className="h-full w-full text-green-600" />
        </div>
        <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-5">
          <h1 className="text-green-600 uppercase font-bold text-center">
            Important Dates
          </h1>
          <ul className="flex  flex-col justify-around  items-start gap-5 mb-4 list-inside list-disc">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
