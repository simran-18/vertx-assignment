import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import profile from "../assets/profile.png";
import arrow from "../assets/arrow.png";
import tick from "../assets/tick.png";
import social from "../assets/social.png";

const tabs = [
    { id: "overview", label: "Overview" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "media", label: "Media" },
];
const Profile = () => {
    const [activeTab, setActiveTab] = useState("overview");
    return (
        <div className="bg-black my-12 text-white min-h-screen w-full lg:max-h-[90vh] overflow-y-scroll z-0">
            <div className="flex justify-between border-b border-gray-500 ">
                <div className="w-full ">
                    {tabs.map(({ id, label }) => (
                        <button
                            key={id}
                            className={`w-1/4 lg:px-4 lg:w-fit text-sm transition-all py-4 ${activeTab === id ? "text-white border-b font-bold" : "text-gray-400 hover:text-white"
                                }`}
                            onClick={() => setActiveTab(id)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <button className="hidden lg:flex px-6 items-center text-gray-400 hover:text-white">
                    More <FiArrowRight className="ml-2" />
                </button>
            </div>
            <div className="px-0 lg:px-10 py-4">
                <div className="hidden lg:flex justify-between items-center ">
                    <h1 className="text-2xl font-semibold pb-4 ">Overview</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6">
                    <div className="bg-gray-950 p-6 rounded-lg">
                        <div className="flex flex-col lg:flex-row">
                            <img src={profile} alt="profile" className="h-36 w-32" />
                            <div className="flex flex-row  items-end lg:items-start lg:flex-col ml-6">
                                <div>
                                    <h1 className="flex text-lg">Mr.A <img src={tick} alt="tick" className="h-6 ml-44" /></h1>
                                    <h2 className="py-1 text-sm text-gray-400 flex">Co-founder & CEO @Vertex <img src={arrow} alt="tick" className="h-5 ml-1" /></h2>
                                    <p className="text-xs bg-gray-200 text-black w-fit px-2 rounded-md">Entrepreneur</p>
                                </div>
                                <img src={social} alt="socail" className="w-16 lg:w-24 lg:h-12 mt-6 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-950 p-6 rounded-lg">
                        <h3 className="text-white text-lg font-semibold mb-4">Founded Companies</h3>
                        <div className="flex items-center justify-between">
                            <span className="text-5xl font-bold text-white my-3">02</span>
                        </div>
                        <div className="space-y-4">                 
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-start w-full">                                 
                                    <div className="h-8 w-8 bg-gray-300 rounded-md mr-2"></div>
                                       <div>
                                        <h1 className="font-medium text-white flex-grow">
                                            Vertx
                                            <span className="bg-green-400 ml-2 text-sm px-2 text-black rounded-sm">CEO</span>
                                        </h1>
                                       <h1 className="text-xs text-gray-400 block">Founded in 2025. in <span className="font-bold text-white">Fintech</span></h1>
                                       </div>
                                        <h2 className="ml-auto text-gray-400 text-xs cursor-pointer">View Profile</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-start w-full">                                 
                                    <div className="h-8 w-8 bg-gray-300 rounded-md mr-2"></div>
                                <div>
                                    <h1 className="font-medium text-white">Company <span className="bg-purple-300 ml-2 text-sm px-2 text-black rounded-sm">PROPRIETOR</span></h1>
                                    <span className="text-xs text-gray-400 block">Founded in 2023.Acquired by abc. in <span className="font-bold text-white">QuickCommerce</span></span>
                                </div>
                                <h2 className="ml-auto text-gray-400 text-xs cursor-pointer">View Profile</h2>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="bg-gray-950 p-6 rounded-lg">
                        <h3 className="text-white text-lg font-semibold mb-4">Experience</h3>
                        <div className="flex items-center justify-between ">
                            <span className="text-5xl font-bold text-white my-3">03</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="h-8 w-8 bg-gray-300 rounded-md mr-2"></div>
                                <div>
                                    <span className="font-medium text-white">Company 1</span>
                                </div>
                                <h2 className="ml-auto text-gray-400 text-xs cursor-pointer">View Profile</h2>
                            </div>
                            <div className="flex items-center">
                                <div className="h-8 w-8 bg-gray-300 rounded-md mr-2"></div>
                                <div>
                                    <span className="font-medium text-white">Company 2</span>
                                </div>
                                <h2 className="ml-auto text-gray-400 text-xs cursor-pointer">View Profile</h2>
                            </div>
                            <div className="flex items-center">
                                <div className="h-8 w-8 bg-gray-300 rounded-md mr-2"></div>
                                <div>
                                    <span className="font-medium text-white">Company 3</span>
                                </div>
                                <h2 className="ml-auto text-gray-400 text-xs cursor-pointer">View Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;