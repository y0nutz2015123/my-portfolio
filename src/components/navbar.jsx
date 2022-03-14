import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(() => !nav);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center px-4 
      bg-[#0a192f] text-gray-300"
    >
      <div>
        <p
          className="font-[Roboto] text-pink-600 font-bold text-xl tracking-wide 
        shadow-sm"
        >
          Agapie Ionut
        </p>
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
            hover:ml-[-10px] duration-300 bg-[#0072b1] rounded-lg"
          >
            <a
              href="https://www.linkedin.com/in/agapie-ionut-29273720b/"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
            hover:ml-[-10px] duration-300 bg-[#171515] rounded-lg"
          >
            <a
              href="https://github.com/y0nutz2015123"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
            hover:ml-[-10px] duration-300 bg-[#BB001B] rounded-lg"
          >
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
            hover:ml-[-10px] duration-300 bg-[#66A13E] rounded-lg"
          >
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
