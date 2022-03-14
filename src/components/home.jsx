import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Agapie Ionut
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an aspiring react developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm an aspiring React developer motivated to learn new things and to
          work in React.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 
            hover:border-pink-600 rounded-lg duration-300"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
