// Dashboard.js
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  labels: ["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"],
  datasets: [
    {
      label: "Visitors",
      data: [50, 80, 60, 90, 70, 110, 85],
      borderColor: "#ffffff",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: "#A0AEC0" } },
    y: { grid: { display: false }, ticks: { color: "#A0AEC0" } },
  },
};

function Dashboard() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <div className="flex justify-between mb-4 text-gray-400 text-sm">
            <span>Visitors</span>
            <span>Last 30 days</span>
          </div>
          <p className="text-4xl font-bold">13.49K</p>
          <p className="text-green-400">+4.95%</p>
          <Line data={data} options={options} />
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Insights</h2>
          <p className="text-2xl font-bold">Founders: 7.4K</p>
          <p className="text-2xl font-bold">Investors: 6.09K</p>
        </div>
      </div>
      <div className="mt-6 bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Demographics</h2>
        <div className="text-gray-300 flex justify-between">
          <span>India</span>
          <div className="w-3/4 bg-gray-800 rounded h-2">
            <div className="bg-blue-500 h-2 rounded w-3/5"></div>
          </div>
          <span>40%</span>
        </div>
        <div className="text-gray-300 flex justify-between mt-2">
          <span>USA</span>
          <div className="w-3/4 bg-gray-800 rounded h-2">
            <div className="bg-orange-500 h-2 rounded w-1/4"></div>
          </div>
          <span>25%</span>
        </div>
        <div className="text-gray-300 flex justify-between mt-2">
          <span>Canada</span>
          <div className="w-3/4 bg-gray-800 rounded h-2">
            <div className="bg-red-500 h-2 rounded w-1/6"></div>
          </div>
          <span>15%</span>
        </div>
        <div className="text-gray-300 flex justify-between mt-2">
          <span>UAE</span>
          <div className="w-3/4 bg-gray-800 rounded h-2">
            <div className="bg-green-500 h-2 rounded w-1/12"></div>
          </div>
          <span>7%</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;