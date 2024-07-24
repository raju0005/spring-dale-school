import React from 'react';
import 'animate.css';

const AboutUs = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-5 gap-10">
      <section className="reveal relative w-screen p-2" aria-labelledby="about-us-title">
        <img
          className="object-fill w-full h-[300px]"
          src="https://placehold.co/10000x800/grey/grey?text="
          alt="Banner image showing school exterior"
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center ">
          <h1 id="about-us-title" className="text-white font-bold uppercase text-[50px]">
            ABOUT US
          </h1>
        </div>
      </section>

      <section className="reveal w-full flex md:flex-row flex-col justify-center gap-5 items-center m-3" aria-labelledby="our-history">
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/grey/grey?text="
          alt="Historical photo of the school"
        />
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h2 id="our-history" className="text-green-600 uppercase font-bold text-[20px]">
            Our History
          </h2>
          <p className="text-[16px] text-center">
            "Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students."
          </p>
        </div>
      </section>

      <section className="reveal w-full flex md:flex-row flex-col justify-center items-center py-10" aria-labelledby="vision-mission">
        <div className="reveal md:w-[50%] w-full flex flex-col justify-around gap-7 items-center bg-green-500 p-11">
          <img className="rounded-xl animate__animated animate__fadeIn" src="https://placehold.co/250x250/white/white?text=" alt="Vision image" />
          <h2 className="text-green-600 font-bold uppercase text-[20px]">
            Vision
          </h2>
          <p className="text-white text-[16px]">
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
        </div>
        <div className="reveal md:w-[50%] w-full flex flex-col justify-around gap-7 items-center bg-green-600 p-10">
          <img className="rounded-xl animate__animated animate__fadeIn" src="https://placehold.co/250x250/white/white?text=" alt="Mission image" />
          <h2 className="text-green-600 font-bold uppercase text-[20px]">
            Mission
          </h2>
          <p className="p-1 text-white text-[16px]">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </div>
      </section>

      <section className="reveal w-full flex md:flex-row flex-col justify-center gap-5 items-center m-3" aria-labelledby="principals-message">
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h2 id="principals-message" className="text-green-600 uppercase font-bold text-[20px]">
            Our Principal's Message
          </h2>
          <p className="text-[16px] text-center">
            "At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future."
          </p>
        </div>
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/grey/grey?text="
          alt="Principal's message photo"
        />
      </section>

      <section className="reveal w-full flex flex-col m-5 justify-center items-center gap-5 bg-green-600 p-3" aria-labelledby="infrastructure-facilities">
        <h2 id="infrastructure-facilities" className="text-white font-bold uppercase text-[30px]">
          Infrastructure & Facilities
        </h2>
        <div className="reveal flex flex-col md:flex-row w-full justify-around items-stretch gap-3 m-3 p-4">
          <div className="reveal flex flex-col justify-between items-center p-2 gap-2 flex-1">
            <img
              className="h-[250px] w-[250px] animate__animated animate__fadeIn rounded-xl"
              src="https://placehold.co/250x250/white/white?text="
              alt="Science and computer labs"
            />
            <p className="text-center">State-of-the-art science and computer labs</p>
          </div>
          <div className="reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[250px] w-[250px] animate__animated animate__fadeIn rounded-xl"
              src="https://placehold.co/250x250/white/white?text="
              alt="Classrooms"
            />
            <p className="text-center">Spacious and well-equipped classrooms</p>
          </div>
          <div className="reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[250px] w-[250px] animate__animated animate__fadeIn rounded-xl"
              src="https://placehold.co/250x250/white/white?text="
              alt="Library"
            />
            <p className="text-center">Library with a vast collection of books and digital resources</p>
          </div>
          <div className="reveal flex flex-col justify-between items-center p-2 gap-4 flex-1">
            <img
              className="h-[250px] w-[250px] animate__animated animate__fadeIn rounded-xl"
              src="https://placehold.co/250x250/white/white?text="
              alt="Sports facilities"
            />
            <p className="text-center">Sports facilities including a playground, gymnasium, and swimming pool</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
