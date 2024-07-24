import React from "react";
import { MdGroups } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";

const Students = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-10">
      <div className="reveal relative w-screen p-2 rounded-xl">
        <img
          className="object-cover w-full h-[300px]"
          src="https://placehold.co/10000x800/grey/grey?text="
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <h1 className=" text-white font-bold uppercase text-[50px]">
            Students
          </h1>
        </div>
      </div>
      <div className="reveal flex flex-col w-full justify-around  items-center my-8 gap-8 bg-green-600 p-5">
        <h1 className="text-white uppercase font-bold text-center text-[30px] m-3">
          Life at Springdale
        </h1>

        <div className="reveal w-full flex  flex-row justify-center gap-9 items-center m-3">
          <div className="reveal h-[70px]  bg-white p-3 rounded-[35px]">
            <MdLocalActivity className="h-full w-full text-green-600" />
          </div>
          <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-4">
            <h1 className="text-white uppercase font-bold text-center">
              Extracurricular Activities
            </h1>
            <ul className="flex md:flex-row flex-col justify-around md:items-center items-start gap-3 mb-4  list-inside list-disc ml-4">
              <li>Music</li>
              <li>Dance</li>
              <li>Drama</li>
              <li>Art</li>
              <li> Sports</li>
              <li>Robotics</li>
            </ul>
          </div>
        </div>
        <div className="reveal w-full flex  flex-row justify-center gap-9 items-center m-3 ">
          <div className="reveal h-[70px]  bg-white p-3 rounded-[35px]">
            <MdGroups className="h-full w-full text-green-600" />
          </div>
          <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-4">
            <h1 className="text-white uppercase font-bold text-center ">
              Clubs and Societies
            </h1>

            <ul className=" flex md:flex-row flex-col justify-around md:items-center items-start gap-3 mb-4 list-disc list-inside ml-4">
              <li>Literary Society</li>
              <li>Environmental Club</li>
              <li>Astronomy Club</li>
              <li>Coding Club</li>
              <li>Debate Club</li>
              <li>Science Club</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-around  items-center my-8 gap-8">
        <h1 className="text-green-600 uppercase font-bold text-center text-[30px] m-3">
          Achievements
        </h1>
        <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 p-5">
          <img
            className="rounded-xl"
            src="https://placehold.co/300x200/grey/grey?text="
            alt=""
          />
          <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center md:mr-[45px]">
            <h1 className="text-green-600 uppercase font-bold text-[20px]">
              John Smith
            </h1>
            <p className="text-[16px] text-center">
              "National Level Math Olympiad Winner."
            </p>
          </div>
        </div>
        <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 p-5">
          <img
            className="rounded-xl"
            src="https://placehold.co/300x200/grey/grey?text="
            alt=""
          />
          <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center ">
            <h1 className="text-green-600 uppercase font-bold text-[20px]">
              Sarah Lee
            </h1>
            <p className="text-[16px] text-center">
              "Gold Medalist in State Swimming Championship."
            </p>
          </div>
        </div>
        <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 p-5">
          <img
            className="rounded-xl"
            src="https://placehold.co/300x200/grey/grey?text="
            alt=""
          />
          <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center ">
            <h1 className="text-green-600 uppercase font-bold text-[20px]">
              Tech Innovators Club
            </h1>
            <p className="text-[16px] text-center">
              "Winners of Inter-School Robotics Competition."
            </p>
          </div>
        </div>
      </div>
      <div className="reveal w-full flex flex-col m-5 justify-center items-center gap-5 bg-green-600 p-3">
        <h1 className="text-white font-bold uppercase text-[30px]">
          Student Council
        </h1>
        <div className="reveal flex flex-col md:flex-row w-full justify-around items-center gap-3 m-3 p-4">
          <div className="reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[150px] w-[150px] animate__animated animate__fadeIn rounded-3xl  "
              src="https://placehold.co/250x250/white/white?text="
              alt=""
            />
            <h1 className="text-white font-bold uppercase mt-2">President</h1>
            <p className="text-center">Amy Parker, Grade 12</p>
          </div>

          <div className="reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[150px] w-[150px] animate__animated animate__fadeIn rounded-3xl  "
              src="https://placehold.co/250x250/white/white?text="
              alt=""
            />
            <h1 className="text-white font-bold uppercase mt-2">
              Vice President
            </h1>
            <p className="text-center">Rajiv Mehta, Grade 11</p>
          </div>

          <div className="reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[150px] w-[150px] animate__animated animate__fadeIn rounded-3xl  "
              src="https://placehold.co/250x250/white/white?text="
              alt=""
            />
            <h1 className="text-white font-bold uppercase mt-2">Secretary</h1>
            <p className="text-center">Lisa Wong, Grade 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
