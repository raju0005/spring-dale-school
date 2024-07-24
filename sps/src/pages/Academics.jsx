import React from "react";
import { Link } from "react-scroll";
import { GiBrain } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";

const Academics = () => {
  return (
    <>
      <nav className="reveal flex md:flex-row flex-col justify-around items-center h-[55vh] bg-green-600 mx-1 my-4 rounded-lg" aria-label="Academic Sections">
        <Link to="primary" spy={true} smooth={true} offset={-50} duration={500}>
          <button className="w-[150px] px-4 py-2 bg-white text-green-600 uppercase font-bold text-center rounded-lg transform transition-transform hover:scale-110">
            Primary
          </button>
        </Link>
        <Link to="secondary" spy={true} smooth={true} offset={-50} duration={500}>
          <button className="w-[150px] px-4 py-2 bg-white text-green-600 uppercase font-bold text-center rounded-lg transform transition-transform hover:scale-110">
            Secondary
          </button>
        </Link>
        <Link to="senior" spy={true} smooth={true} offset={-50} duration={500}>
          <button className="w-[150px] px-4 py-2 bg-white text-green-600 uppercase font-bold text-center rounded-lg transform transition-transform hover:scale-110">
            Senior
          </button>
        </Link>
      </nav>

      <section id="primary" className="reveal flex flex-col w-full justify-around items-center my-8 gap-8">
        <h2 className="text-green-900 uppercase font-bold text-center text-[30px] m-3">
          Primary
        </h2>

        <div className="reveal w-full flex flex-row justify-center gap-9 items-center m-3">
          <div className="h-[70px] bg-green-600 p-3 rounded-[35px]" aria-hidden="true">
            <GiBrain className="h-full w-full text-white" />
          </div>
          <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-4">
            <h3 className="text-green-900 uppercase font-bold text-center">
              Philosophy
            </h3>
            <p>
              A refined personality is a result of proper grooming. At Springdale, we look to inculcate the best moral values and social etiquette, resulting in children with impeccable character.
            </p>
          </div>
        </div>
        <div className="reveal w-full flex flex-row justify-center gap-9 items-center m-3">
          <div className="reveal h-[70px] bg-green-600 p-3 rounded-[35px]" aria-hidden="true">
            <IoBookSharp className="h-full w-full text-white" />
          </div>
          <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-4">
            <h3 className="text-green-900 uppercase font-bold text-center">
              Curriculum
            </h3>
            <ul className="flex md:flex-row flex-col justify-around md:items-center items-start gap-5 mb-4 list-inside list-disc">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="secondary" className="reveal flex flex-col w-full justify-around items-center my-8 gap-8 bg-green-600 p-5">
        <h2 className="text-white uppercase font-bold text-center text-[30px] m-3">
          Secondary
        </h2>

        <div className="reveal w-full flex flex-row justify-center gap-9 items-center m-3">
          <div className="reveal h-[70px] bg-white p-3 rounded-[35px]" aria-hidden="true">
            <GiBrain className="h-full w-full text-green-600" />
          </div>
          <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-4">
            <h3 className="text-white uppercase font-bold text-center">
              Philosophy
            </h3>
            <p>
              Every child has innate capabilities that help him/her shine. Our expert faculty provides the right guidance to bring out these latent qualities, transforming the student into a successful individual. Springdale is uniquely oriented to prepare students for prestigious institutes like IITs, NITs, AIIMS, and more.
            </p>
          </div>
        </div>
        <div className="reveal w-full flex flex-row justify-center gap-9 items-center m-3">
          <div className="reveal h-[70px] bg-white p-3 rounded-[35px]" aria-hidden="true">
            <IoBookSharp className="h-full w-full text-green-600" />
          </div>
          <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-4">
            <h3 className="text-white uppercase font-bold text-center">
              Curriculum
            </h3>
            <ul className="flex md:flex-row flex-col justify-around md:items-center items-start gap-3 mb-4 list-inside list-disc">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="senior" className="reveal flex flex-col w-full justify-around items-center my-8 gap-8">
        <h2 className="text-green-900 uppercase font-bold text-center text-[30px] m-3">
          Senior-Secondary
        </h2>

        <div className="reveal w-full flex flex-row justify-center gap-9 items-center m-3">
          <div className="reveal h-[70px] bg-green-600 p-3 rounded-[35px]" aria-hidden="true">
            <GiBrain className="h-full w-full text-white" />
          </div>
          <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-4">
            <h3 className="text-green-900 uppercase font-bold text-center">
              Philosophy
            </h3>
            <p>
              A refined personality is a result of proper grooming. At Springdale, we look to inculcate the best moral values and social etiquette, resulting in students with impeccable character.
            </p>
          </div>
        </div>
        <div className="reveal w-full flex flex-row justify-center gap-9 items-center m-3">
          <div className="reveal h-[70px] bg-green-600 p-3 rounded-[35px]" aria-hidden="true">
            <IoBookSharp className="h-full w-full text-white" />
          </div>
          <div className="reveal md:w-[70%] w-[60%] flex flex-col justify-around items-start gap-4">
            <h3 className="text-green-600 uppercase font-bold text-center">
              Curriculum
            </h3>
            <div>
              <h4 className="font-semibold mt-4">Science Stream:</h4>
              <ul className="flex md:flex-row flex-col justify-around md:items-center items-start gap-5 mb-4 list-inside list-disc">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mt-4">Commerce Stream:</h4>
              <ul className="flex md:flex-row flex-col justify-around md:items-center items-start gap-5 mb-4 list-inside list-disc">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal w-full flex md:flex-row flex-col justify-center gap-5 items-center my-5 p-7">
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/grey/grey?text="
          alt="Teaching methodologies illustration"
        />
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h3 className="text-green-900 uppercase font-bold text-[20px]">
            Teaching Methodologies
          </h3>
          <p className="text-[16px] text-center">
            "We use a blend of traditional and modern teaching techniques to cater to different learning styles."
          </p>
        </div>
      </section>

      <section className="reveal w-full flex md:flex-row flex-col justify-center gap-5 items-center my-5 bg-green-600 p-7">
        <div className="flex flex-col justify-around gap-3 md:items-start items-center">
          <h3 className="text-white uppercase font-bold text-[20px]">
            Educational Resources
          </h3>
          <p className="text-[16px] text-center">
            "Digital classrooms, interactive learning modules, and access to online educational platforms."
          </p>
        </div>
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/white/white?text="
          alt="Educational resources illustration"
        />
      </section>
    </>
  );
};

export default Academics;
