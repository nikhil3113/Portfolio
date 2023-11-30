import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const email = "chavann717@gmail.com";
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/1d73eb96-ed45-4011-b04a-535929a632f5"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Feel Free to Contact</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-600 hover:border-cyan-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>

      <div className="lg:hidden">
        <ul>
          <li className="w-[60px] h-[60px] flex justify-between items-center">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/nikhil-chavan-8b83ab184"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/nikhil3113"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center ">
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

export default Contact;
