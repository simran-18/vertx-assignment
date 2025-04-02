import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import india from "../assets/in.svg";
import uae from "../assets/ae.svg";
import usa from "../assets/us.svg";
import canada from "../assets/ca.svg";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import profile from "../assets/profile.png";
import arrow from "../assets/arrow.png";
import tick from "../assets/tick.png";
import social from "../assets/social.png";
import 'leaflet/dist/leaflet.css';

const demographicsData = [
    { country: "India", percentage: 60, color: "#3b82f6", map: india },
    { country: "USA", percentage: 25, color: "#f97316", map: usa },
    { country: "Canada", percentage: 10, color: "#e11d48", map: canada },
    { country: "UAE", percentage: 7, color: "#16a34a", map: uae },
];
const locations = [
    { lat: 40.7128, lon: -74.0060, color: 'orange', label: 'New York' },
    { lat: 51.5074, lon: -0.1278, color: 'yellow', label: 'London' },
    { lat: 34.0522, lon: -118.2437, color: 'cyan', label: 'Delhi' },
    { lat: 28.6139, lon: 77.2090, color: 'purple', label: 'Beijing' },
];
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
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-gray-950 p-6 rounded-lg">
                        <div className="flex flex-col lg:flex-row">
                            <img src={profile} alt="profile" className="h-36 w-32" />
                            <div className="flex flex-row  items-end lg:items-start lg:flex-col ml-6">
                                <div>
                                <h1 className="flex text-lg">Mr.A <img src={tick} alt="tick" className="h-6 ml-44"/></h1>
                                <h2 className="py-1 text-sm text-gray-400 flex">Co-founder & CEO @Vertex <img src={arrow} alt="tick" className="h-5 ml-1"/></h2>
                                <p className="text-xs bg-gray-200 text-black w-fit px-2 rounded-md">Entrepreneur</p>
                                </div>
                                <img src={social} alt="socail" className="w-16 lg:w-24 lg:h-12 mt-6 object-contain"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-950 p-3 rounded-lg col-span-3 mt-3">
                    <h2 className="text-lg font-semibold mb-4">Demographics</h2>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        <div className="h-48 lg:h-56 w-full relative">
                            <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {locations.map((location, index) => (
                                    <Marker
                                        key={index}
                                        position={[location.lat, location.lon]}
                                        icon={L.divIcon({
                                            className: 'custom-icon',
                                            html: `<div style="background-color:${location.color}; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px ${location.color};"></div>`,
                                        })}
                                    >
                                        <Popup>{location.label}</Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                            <div className="absolute hidden lg:flex transformflex bg-white/10 rounded-full p-2 gap-6 ">
                                {locations.map((location, index) => (
                                    <div key={index} className="flex items-center">
                                        <div
                                            style={{ backgroundColor: location.color }}
                                            className="h-4 w-4 rounded-full mr-2"
                                        ></div>
                                        <p className="text-white text-xs">{location.label}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="flex flex-col space-y-4 mt-12 lg:mt-0 w-full lg:w-1/2 ">
                            {demographicsData.map(({ country, percentage, color, map }) => (
                                <div key={country} className="flex items-center w-full space-x-3 z-0">
                                    <img src={map} alt={country} className="h-8 w-10 object-cover rounded" />
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">{country}</span>
                                            <span className="text-gray-400">{percentage}%</span>
                                        </div>
                                        <div className="bg-gray-500 h-3 rounded-lg w-full mt-1 relative">
                                            <div
                                                className="h-3 absolute left-0 rounded-lg"
                                                style={{ width: `${percentage}%`, backgroundColor: color }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="mt-4 hover:underline flex w-full justify-end">
                        View all countries <FiArrowRight className="ml-2 my-auto" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;