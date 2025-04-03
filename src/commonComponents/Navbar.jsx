import React from "react";
import logo from "../assets/logo.png";
import "tailwindcss/tailwind.css";
import { FiMoreVertical } from "react-icons/fi";
import { useAppContext } from "../contexts/AppContext";

export function Navbar() {
  const {pathname}=useAppContext();
  
  return (
    <nav className="flex justify-between items-center bg-black border-b-1 border-dark fixed z-[999] top-0 w-full text-white text-sm">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center w-full ">
        <div className="flex items-center w-80">
          <img src={logo} alt="Logo" className="mx-2 h-9 w-9 bg-white p-1.5 rounded-full " loading='lazy' />
          <span className="text-white font-bold text-lg ml-12">Vertxlabs, Inc</span>
        </div>
        
        <div className="flex text-white w-full justify-between">
            <h1 className="p-4 flex-grow capitalize text-base font-semibold">{pathname}</h1>
            <div>
           <button className="hover:text-lightGray  border-l-1 border-dark px-6  p-4">Activity</button>
           <button className="hover:text-lightGray border-l-1 border-dark px-6  p-4">Log out</button>
            </div>
        </div>
      </div>
      
      {/* Mobile Navbar */}
    <div className="flex md:hidden items-center w-full justify-between p-3 z-[999]">
        <img
          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps="
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
        <img
          src={logo}
          alt="Center Icon"
          className="h-6"
        />
        <FiMoreVertical className="text-white text-xl" />
      </div>
    </nav>
  );
}
