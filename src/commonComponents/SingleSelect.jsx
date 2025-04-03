import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; 

const SingleSelect = ({ id, value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("value is::",value)
  const handleSelect = (selectedValue) => {
    onChange({ target: { id, value: selectedValue } });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full border-2 border-dark rounded-md ">
      <div
        className="w-full bg-black text-lightGray p-1 rounded-md text-xs md:text-lg  flex justify-between items-center cursor-pointer focus:border-gray-500 focus:ring focus:ring-gray-600 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value ? options.find((opt) => opt.value === value)?.label : placeholder}</span>
        <ChevronDown className="w-4 h-4" />
      </div>

      {isOpen && (
        <ul className="absolute left-0 w-full bg-black border-2 border-dark rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={option.value}
              className="p-2 text-[#555555] hover:bg-gray-700 hover:text-white text-sm cursor-pointer"
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
