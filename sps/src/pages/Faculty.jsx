import React from "react";

const Faculty = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-10">
      <div className="reveal relative w-screen p-2">
        <img
          className="object-cover w-full h-[300px]"
          src="https://placehold.co/10000x800/grey/grey?text="
          alt="Faculty Banner"
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <h1 className="text-white font-bold uppercase text-[50px]">
            Faculty
          </h1>
        </div>
      </div>

      <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 p-5">
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/grey/grey?text="
          alt="John Doe"
        />
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h2 className="text-green-600 uppercase font-bold text-[20px]">
            John Doe
          </h2>
          <p className="text-[16px] text-center">
            Principal, M.Ed, 20 years of experience in educational administration.
          </p>
        </div>
      </div>

      <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 bg-green-600 p-5">
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h2 className="text-white uppercase font-bold text-[20px]">
            Jane Smith
          </h2>
          <p className="text-[16px] text-center">
            Vice Principal, M.Sc. in Physics, 15 years of teaching experience.
          </p>
        </div>
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/white/white?text="
          alt="Jane Smith"
        />
      </div>

      <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 p-5">
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/grey/grey?text="
          alt="Emily Johnson"
        />
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h2 className="text-green-600 uppercase font-bold text-[20px]">
            Emily Johnson
          </h2>
          <p className="text-[16px] text-center">
            English Teacher, M.A. in English, 10 years of teaching experience.
          </p>
        </div>
      </div>

      <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 bg-green-600 p-5">
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h2 className="text-white uppercase font-bold text-[20px]">
            Michael Brown
          </h2>
          <p className="text-[16px] text-center">
            Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.
          </p>
        </div>
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/white/white?text="
          alt="Michael Brown"
        />
      </div>

      <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 p-5">
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/grey/grey?text="
          alt="Sophia Davis"
        />
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h2 className="text-green-600 uppercase font-bold text-[20px]">
            Sophia Davis
          </h2>
          <p className="text-[16px] text-center">
            Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.
          </p>
        </div>
      </div>

      <div className="reveal w-full flex md:flex-row flex-col justify-center gap-10 items-center m-3 bg-green-600 p-5">
        <div className="reveal flex flex-col justify-around gap-3 md:items-start items-center">
          <h2 className="text-white uppercase font-bold text-[20px]">
            David Wilson
          </h2>
          <p className="text-[16px] text-center">
            Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.
          </p>
        </div>
        <img
          className="rounded-xl animate__animated animate__fadeIn"
          src="https://placehold.co/300x200/white/white?text="
          alt="David Wilson"
        />
      </div>
    </div>
  );
};

export default Faculty;
