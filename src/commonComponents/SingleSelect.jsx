import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io"; 

const SingleSelect = ({ id, value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("value is::",value)
  const handleSelect = (selectedValue) => {
    onChange({ target: { id, value: selectedValue } });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full border-1 border-dark rounded-lg ">
      <div
        className="w-full bg-black text-white p-1 text-xs md:text-lg  flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value ? options.find((opt) => opt.value === value)?.label : placeholder}</span>
        <IoMdArrowDropdown className="w-4 h-4" />
      </div>

      {isOpen && (
        <ul className="absolute left-0 w-full bg-black border-1 border-dark rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={option.value}
              className={`p-2  hover:bg-gray-700 ${value===option.value?'text-white':'text-[#555555]'} hover:text-white text-sm cursor-pointer`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
              {index !== options.length - 1 && <div className=""></div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SingleSelect;
