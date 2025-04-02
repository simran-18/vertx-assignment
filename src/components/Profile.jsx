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

const foundedCompanies = [
    { name: "Vertx", year: 2025, industry: "Fintech", role: "CEO", roleBg: "bg-green-400" },
    { name: "Company", year: 2023, industry: "QuickCommerce", role: "PROPRIETOR", roleBg: "bg-purple-300", acquired: "abc" }
];

const experiences = ["Company 1", "Company 2", "Company 3"];

const SectionCard = ({ title, count, items, renderItem }) => (
    <div className="bg-white/5 border border-gray-600 p-6 rounded-lg">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <span className="text-6xl font-bold text-white my-6 block">0{count}</span>
        <div className="space-y-4">{items.map(renderItem)}</div>
    </div>
);

const Profile = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="bg-black my-12 text-white min-h-screen w-full lg:max-h-[90vh] overflow-y-scroll z-0">
            <div className="flex justify-between border-b border-gray-500">
                <div className="w-full">
                    {tabs.map(({ id, label }) => (
                        <button
                            key={id}
                            className={`w-1/4 lg:px-4 lg:w-fit text-sm transition-all py-4 ${activeTab === id ? "text-white border-b font-bold" : "text-gray-400 hover:text-white"}`}
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

            <div className="px-0 lg:px-10 py-4 m-2 lg:m-0">
                <h1 className="hidden lg:block text-2xl font-semibold pb-4">Overview</h1>
                <div className="grid grid-cols-1 gap-6 mb-6">
                    <div className="bg-white/5 border border-gray-600 p-6 rounded-lg flex flex-col lg:flex-row">
                        <img src={profile} alt="profile" className="h-36 w-32" />
                        <div className="flex flex-row items-end lg:items-start lg:flex-col ml-6">
                            <div>
                                <h1 className="flex text-lg">Mr.A <img src={tick} alt="tick" className="h-6 ml-44" /></h1>
                                <h2 className="py-1 text-sm text-gray-400 flex">Co-founder & CEO @Vertex <img src={arrow} alt="tick" className="h-5 ml-1" /></h2>
                                <p className="text-xs bg-gray-200 text-black w-fit px-2 rounded-md">Entrepreneur</p>
                            </div>
                            <img src={social} alt="social" className="w-16 lg:w-24 lg:h-12 mt-6 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SectionCard
                        title="Founded Companies"
                        count={foundedCompanies.length}
                        items={foundedCompanies}
                        renderItem={({ name, year, industry, role, roleBg, acquired }) => (
                            <div key={name} className="flex justify-between items-start w-full">
                                <div className="h-8 w-8 bg-gray-300 rounded-md mr-2"></div>
                                <div>
                                    <h1 className="font-medium text-white flex-grow">
                                        {name}
                                        <span className={`ml-2 text-sm px-2 text-black rounded-sm ${roleBg}`}>{role}</span>
                                    </h1>
                                    <h2 className="text-xs text-gray-400 block">
                                        Founded in {year}{acquired ? `. Acquired by ${acquired}` : ""}. in <span className="font-bold text-white">{industry}</span>
                                    </h2>
                                </div>
                                <h2 className="ml-auto text-gray-400 text-xs cursor-pointer">View Profile</h2>
                            </div>
                        )}
                    />
                    
                    <SectionCard
                        title="Experience"
                        count={experiences.length}
                        items={experiences}
                        renderItem={(company) => (
                            <div key={company} className="flex items-center">
                                <div className="h-8 w-8 bg-gray-300 rounded-md mr-2"></div>
                                <span className="font-medium text-white">{company}</span>
                                <h2 className="ml-auto text-gray-400 text-xs cursor-pointer">View Profile</h2>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
