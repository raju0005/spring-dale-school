import React from "react";
import 'animate.css'

const AboutUs = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-5 gap-10">
      <div className="reveal relative w-screen p-2">
        <img
          className="object-fill w-full h-[300px]"
          src="https://placehold.co/10000x800/grey/grey?text="
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <h1 className=" text-green-800   font-bold uppercase text-[50px]">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className=" reveal w-full flex md:flex-row flex-col justify-center gap-5 items-center m-3">
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/grey/grey?text="
          alt=""
        />
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h1 className="text-green-900 uppercase font-bold text-[20px]">
            Our History
          </h1>
          <p className="text-[16px] text-center">
            "Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students."
          </p>
        </div>
      </div>
      <div className="reveal w-full flex md:flex-row flex-col justify-center items-center py-10">
        <div className="reveal md:w-[50%] w-full flex flex-col justify-around gap-7 items-center bg-green-500 p-11">
          <img className="rounded-xl animate__animated animate__fadeIn" src="https://placehold.co/250x250/white/white?text=" alt="" />
          <h1 className="text-green-900 font-bold uppercase text-[20px]">
            Vision
          </h1>
          <p className="text-white text-[16px]">
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
        </div>
        <div className=" reveal md:w-[50%] w-full flex flex-col justify-around gap-7 items-center bg-green-600 p-10">
          <img className="rounded-xl animate__animated animate__fadeIn" src="https://placehold.co/250x250/white/white?text=" alt="" />
          <h1 className="text-green-900 font-bold uppercase text-[20px]">
            Mission
          </h1>
          <p className="p-1 text-white text-[16px]">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </div>
      </div>
      <div className=" reveal w-full flex md:flex-row flex-col justify-center gap-5 items-center m-3">
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h1 className="text-green-900 uppercase font-bold text-[20px]">
            Our Principal's Message
          </h1>
          <p className="text-[16px] text-center">
            "At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future."
          </p>
        </div>
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/grey/grey?text="
          alt=""
        />
      </div>
      <div className="reveal w-full flex flex-col m-5 justify-center items-center gap-5 bg-green-600 p-3">
        <h1 className="text-white font-bold uppercase text-[30px]">
          Infrastructure & facilities
        </h1>
        <div className="reveal flex flex-col md:flex-row w-full justify-around items-stretch gap-3 m-3 p-4">
          <div className="reveal flex flex-col justify-between items-center p-2 gap-2 flex-1">
            <img
              className="h-[250px] w-[250px] animate__animated animate__fadeIn rounded-xl"
              src="https://placehold.co/250x250/white/white?text="
              alt=""
            />
            <p className="text-center">
              State-of-the-art science and computer labs
            </p>
          </div>
          <div className="reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[250px] w-[250px] animate__animated animate__fadeIn rounded-xl"
              src="https://placehold.co/250x250/white/white?text="
              alt=""
            />
            <p className="text-center">Spacious and well-equipped classrooms</p>
          </div>
          <div className="reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[250px] w-[250px] animate__animated animate__fadeIn rounded-xl"
              src="https://placehold.co/250x250/white/white?text="
              alt=""
            />
            <p className="text-center">
              Library with a vast collection of books and digital resources
            </p>
          </div>
          <div className=" reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[250px] w-[250px] animate__animated animate__fadeIn rounded-xl"
              src="https://placehold.co/250x250/white/white?text="
              alt=""
            />
            <p className="text-center">
              Sports facilities including a playground, gymnasium, and swimming
              pool
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
