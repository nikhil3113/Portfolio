import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

//bg-transparent backdrop-blur-sm
// bg-[#0a192f]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const email = 'chavann717@gmail.com' 

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent backdrop-blur-sm text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "170px" }} />
      </div>

      <ul className="hidden md:flex font-bold">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
        <Link
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
        <Link
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
        <Link
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
        <Link
            to="contact"
            smooth={true}
            duration={500}
          >
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
        <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex lg:mt-[15%] lg:top-[100%] lg:h-100 fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[60px] h-[60px] flex justify-between items-center hover:bg-gradient-to-r from-blue-500 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/nikhil-chavan-8b83ab184"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center hover:bg-gradient-to-r from-gray-500 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/nikhil3113"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center hover:bg-gradient-to-r from-[#6fc2b0] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center hover:bg-gradient-to-r from-[#565f91] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/17Yrd0p9z4De_YdciluMg0K0q5LFh66s_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
