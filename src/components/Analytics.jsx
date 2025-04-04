import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { FiArrowRight } from "react-icons/fi";
import india from "../assets/in.svg";
import uae from "../assets/ae.svg";
import usa from "../assets/us.svg";
import canada from "../assets/ca.svg";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import VisitorsConnectionsChart from "./VisitorsConnectionsChart";

const visitorData = [
    { date: "Mar 1", visitors: 500 },
    { date: "Mar 5", visitors: 700 },
    { date: "Mar 10", visitors: 400 },
    { date: "Mar 15", visitors: 1000 },
    { date: "Mar 20", visitors: 600 },
    { date: "Mar 25", visitors: 900 },
    { date: "Mar 30", visitors: 1200 },
];

const demographicsData = [
    { country: "India", percentage: 60, color: "#4834D4", map: india },
    { country: "USA", percentage: 25, color: "#BD5302", map: usa },
    { country: "Canada", percentage: 10, color: "#E9C16B", map: canada },
    { country: "UAE", percentage: 7, color: "#579560", map: uae },
];
const locations = [
    { lat: 40.7128, lon: -74.0060, color: '#4834D4', label: 'New York' },
    { lat: 51.5074, lon: -0.1278, color: '#BD5302', label: 'London' },
    { lat: 34.0522, lon: -118.2437, color: '#E9C16B', label: 'Delhi' },
    { lat: 28.6139, lon: 77.2090, color: '#579560', label: 'Beijing' },
];
const tabs = [
    { id: "overview", label: "Overview" },
    { id: "demographics", label: "Demographics" }
];

const Analytics = () => {
    const [activeTab, setActiveTab] = useState("overview");
    return (
        <div className="bg-black my-12 text-white min-h-screen w-full lg:max-h-[90vh] overflow-y-scroll z-0">
            <div className="flex justify-between  border-b-1 border-dark">
                <div className="w-full">
                    {tabs.map(({ id, label }) => (
                        <button
                            key={id}
                            className={`w-1/2 lg:w-fit px-6 pt-5 pb-4 text-sm transition-all ${activeTab === id ? "text-white border-b font-bold" : "text-lightGray hover:text-white"
                                }`}
                            onClick={() => setActiveTab(id)}
                        >
                            {label}
                        </button>
                    ))}

                </div>
                <button className="hidden lg:flex px-6 items-center text-lightGray hover:text-white">
                    More <FiArrowRight className="ml-2" />
                </button>
            </div>
            <div className="px-0 lg:px-10 py-4 m-2">
                <div className="hidden lg:flex justify-between items-center ">
                    <h1 className="text-2xl font-semibold pb-4 ">Overview</h1>
                </div>
                <div className="grid grid-cols-1 w-full lg:grid-cols-3  lg:gap-6 pb-3">
                    <div className=" border-1 border-dark p-6 w-full mb-6 lg:mb-0 rounded-lg col-span-2">
                    <VisitorsConnectionsChart/>
                    </div>
                    <div className=" border-1 border-dark p-6 w-full flex flex-col justify-between rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Insights</h2>
                        <div className="flex flex-row lg:flex-col justify-between">
                            <div className="mb-3">
                                <p className="">Founders</p>
                                <div className="flex">
                                    <p className="text-2xl font-semibold">7.4K </p>
                                    <div className="inline-flex flex-col text-xs ml-6 ">
                                        <span className="text-darkGreen"> +000%</span>
                                        <span className="text-lightGray">(000)</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="">Investors</p>
                                <div className="flex">
                                    <p className="text-2xl font-semibold">6.09K</p>
                                    <div className="inline-flex flex-col text-xs ml-6"><span className="text-darkGreen"> 000%</span>
                                        <span className="text-lightGray">(000)</span></div>
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 pt-4 text-white-400 text-xs flex justify-end border-t-1 border-dark w-full">
                            View detailed insights <FiArrowRight className="ml-2 my-auto" />
                        </button>
                    </div>
                </div>
                <div className=" border-1 border-dark p-3 rounded-lg col-span-3 mt-3">
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
                            <div className="absolute hidden lg:flex gap-3 transform bg-black border-2 border-dark rounded-full p-2  ">
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
                                            <span className="text-lightGray">{percentage}%</span>
                                        </div>
                                        <div className="bg-white/10 h-3 rounded-lg w-full mt-1 relative">
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
                    <button className="mt-4 flex w-full text-xs justify-end">
                        View all countries <FiArrowRight className="ml-2 my-auto" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;