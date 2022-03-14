import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-20 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000px] px-20 w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi 👋, I'm Ionuţ, nice to meet you. 😊</p>
          </div>
          <div>
            <p>
              I am passionate about programming and building excellent software
              that improves the lives of those arround me. 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
