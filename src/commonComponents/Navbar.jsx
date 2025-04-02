import React from "react";
import logo from "../assets/logo.png";
import "tailwindcss/tailwind.css";
import { FiMoreVertical } from "react-icons/fi";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black border-b border-gray-700 fixed z-10 top-0 w-full text-white text-sm">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center w-full justify-between">
        <div className="flex items-center  p-4">
          <img src={logo} alt="Logo" className="h-6 mr-2" loading='lazy' />
          <span className="text-white font-bold">Vertxlabs, Inc</span>
        </div>
        <div className="flex text-white text-center">
          <button className="hover:text-gray-400  border-l-2 border-gray-700 px-6  p-4">Activity</button>
          <button className="hover:text-gray-400 border-l-2 border-gray-700 px-6  p-4">Log out</button>
        </div>
      </div>
      
      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center w-full justify-between p-2">
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
