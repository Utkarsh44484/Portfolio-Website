import React, { useState } from "react";
import name_logo from "./images/Name_logo.png";

function Nav(){
  let Links = [
    { name: "About Me", link: "/", id: "aboutme" },
    { name: "Skills", link: "/", id: "skills" },
    { name: "Projects", link: "/", id: "projects" },
    { name: "Experience", link: "/", id: "experience" },
    { name: "Contact Me", link: "/", id: "contactme" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full bg-white fixed z-10">
      <div className="bg-zinc-950 md:flex items-center justify-between  py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'> */}
          {/* <ion-icon name="logo-ionic"></ion-icon> */}
          <img className="h-15 w-20" src={name_logo}></img>
          {/* </span> */}
          {/* <span>
            <FcMenu />
        </span> */}
        </div>
        {/* <i class="fa-solid fa-bars" style="color: #d5ddeb;"></i> */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon class="bg-white" name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`text-white md:flex md:items-center md:pb-0 pb-12 absolute md:static   bg-zinc-950 md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={`#${link.id}`}
                className="text-bluelight text-lg hover:text-bluemid duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <Button>
          Get Started
        </Button> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
