import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import SingleSelect from '../commonComponents/SingleSelect';
const VisitorsConnectionsChart = () => {
    // Mock data for 3 different time periods: "Last 30 days", "Last 7 days", "This week" etc.
    const data = {
        "Yesterday": {
          visitors: [1100, 1300, 1200, 1400, 1300, 1200, 1100],
          connections: [700, 750, 800, 850, 900, 850, 800],
          interactions: [400, 450, 500, 550, 520, 600, 650],
          impressions: [900, 950, 1000, 1100, 1050, 1150, 1250],
        },
        "This week": {
          visitors: [1400, 1500, 1600, 1700, 1800, 1900, 2000],
          connections: [800, 900, 950, 1000, 1100, 1050, 1200],
          interactions: [600, 700, 750, 800, 850, 900, 950],
          impressions: [1200, 1300, 1350, 1400, 1450, 1500, 1600],
        },
        "Last week": {
          visitors: [1200, 1300, 1400, 1500, 1600, 1700, 1800],
          connections: [700, 750, 800, 850, 900, 950, 1000],
          interactions: [500, 550, 600, 650, 700, 750, 800],
          impressions: [1000, 1050, 1100, 1200, 1250, 1300, 1400],
        },
        "Last 7 days": {
          visitors: [1300, 1400, 1500, 1600, 1700, 1500, 1600],
          connections: [750, 800, 850, 900, 950, 1000, 1100],
          interactions: [450, 500, 550, 600, 650, 700, 750],
          impressions: [1050, 1100, 1150, 1200, 1250, 1300, 1350],
        },
        "Last 30 days": {
          visitors: [1200, 1500, 1400, 1600, 1100, 1300, 1700],
          connections: [800, 900, 1000, 1100, 950, 1000, 1200],
          interactions: [500, 600, 700, 750, 650, 800, 950],
          impressions: [1000, 1100, 1300, 1400, 1200, 1300, 1600],
        },
      };
      

    // Initial values
    const dates = ["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"];
    const [metrics, setMetrics] = useState(["visitors"]); // Default metric
    const [timePeriod, setTimePeriod] = useState("Last 30 days"); // Default time period
    const [currentData, setCurrentData] = useState(data["Last 30 days"]);

    // Handle time period change
    const handleTimePeriodChange = (e) => {
        const selectedPeriod = e.target.value;
        setTimePeriod(selectedPeriod);
        setCurrentData(data[selectedPeriod]);
    };

    const handleMetricChange = (e) => {
        const selectedMetric = e.target.value;
        setMetrics([selectedMetric]);
    };
    const handleAddMetricChange = (e) => {
        const selectedMetric = e.target.value;
        setMetrics((prevMetrics) => [...prevMetrics, selectedMetric]); 
    };    

    const calculatePercentageChange = (metricData) => {
        return ((metricData?.[metricData?.length - 1] - metricData?.[0]) / metricData?.[0]) * 100;
    };

    // Prepare chart data dynamically based on selected metrics
    const getData = () => {
        let datasets = [];

        if (metrics.includes("visitors")) {
            datasets.push({
                label: "Visitors",
                data: currentData?.visitors,
                borderColor: '#A3A3FF', // Purple line
                backgroundColor: 'rgba(163, 163, 255, 0.3)', // Purple background
                fill: true,
                tension: 0.1,
            });
        }
        if (metrics.includes("connections")) {
            datasets.push({
                label: "Connections",
                data: currentData?.connections,
                borderColor: '#FFFFFF', // White line
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // White background
                fill: true,
                tension: 0.1,
            });
        }
        if (metrics.includes("interactions")) {
            datasets.push({
                label: "Interactions",
                data: currentData?.interactions,
                borderColor: '#00FF00', // Green line
                backgroundColor: 'rgba(0, 255, 0, 0.3)', // Green background
                fill: true,
                tension: 0.1,
            });
        }
        if (metrics.includes("impressions")) {
            datasets.push({
                label: "Impressions",
                data: currentData?.impressions,
                borderColor: '#FFA500', // Orange line
                backgroundColor: 'rgba(255, 165, 0, 0.3)', // Orange background
                fill: true,
                tension: 0.1,
            });
        }

        return {
            labels: dates,
            datasets: datasets,
        };
    };

    // Chart options including a dynamic title based on selected metrics
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            title: {
                display: false,
                text: metrics.join(" & "), // Display the selected metrics as the title
                font: {
                    size: 18,
                    weight: 'bold',
                },
            },
        },
        scales: {
            x: {
                title: { display: false, text: "Date" },
            },
            y: {
                title: { display: false, text: "Count" },
                ticks: {
                    callback: function (value) {
                        // Convert the values to "K" format
                        if (value >= 1000) {
                            return (value / 1000) + 'K';
                        }
                        return value;
                    },
                    min: 200,
                    max: 2000,
                    values: [200, 400, 800, 1200, 2000],
                },
            },
        },
    };

    return (
        <div className="">
            <div className="flex space-x-4 mb-6">
                <div className='flex md:gap-4 w-full md:w-3/4'>
            <SingleSelect
                    id="metrics"
                    label="Select Metric"
                    value={metrics[0]} 
                    onChange={handleMetricChange}
                    options={[
                        { value: "visitors", label: "Visitors" },
                        { value: "connections", label: "Connections" },
                        { value: "interactions", label: "Interactions" },
                        { value: "impressions", label: "Impressions" },
                    ]}
                />
                 <SingleSelect
                    id="timePeriod"
                    label="Time Period"
                    value={timePeriod}
                    onChange={handleTimePeriodChange}
                    options={[
                        { value: "Yesterday", label: "Yesterday" },
                        { value: "This week", label: "This week" },
                        { value: "Last week", label: "Last week" },
                        { value: "Last 7 days", label: "Last 7 days" },
                        { value: "Last 30 days", label: "Last 30 days" },
                    ]}
                />
                <SingleSelect
                    id="addMetric"
                    label="+ Add"
                    value={"+ Add"}
                    onChange={handleAddMetricChange}
                    options={[
                        { value: "+ Add", label: "+ Add" },
                        { value: "connections", label: "Connections" },
                        { value: "interactions", label: "Interactions" },
                        { value: "impressions", label: "Impressions" },
                    ]}
                />
                </div>
            </div>
            <div className="text-white overflow-x-scroll flex space-x-4 ">
                {metrics?.includes("visitors") && (
                    <div className="text-center flex border-r">
                        <div className="text-2xl">{new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(currentData?.visitors[currentData.visitors.length - 1])}</div>
                        <div className='mx-2'>
                            <div className="text-sm text-green-400">+{calculatePercentageChange(currentData?.visitors).toFixed(1)}%</div>
                            <div className="text-sm text-gray-400">({currentData?.visitors[0]})</div>
                        </div>
                    </div>
                )}
                {metrics?.includes("connections") && (
                    <div className="text-center flex  border-r">
                        <div className="text-2xl">{new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(currentData?.connections[currentData.connections.length - 1])}</div>
                        <div className='mx-2'>
                            <div className="text-sm text-green-400">+{calculatePercentageChange(currentData?.connections).toFixed(1)}%</div>
                            <div className="text-sm text-gray-400">({currentData?.connections[0]})</div>
                        </div>
                    </div>
                )}
                {metrics?.includes("interactions") && (
                    <div className="text-center flex border-r">
                        <div className="text-2xl">{new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(currentData?.interactions[currentData.interactions.length - 1])}
                            </div>
                        <div className='mx-2'>
                            <div className="text-sm text-green-400">+{calculatePercentageChange(currentData?.interactions).toFixed(1)}%</div>
                            <div className="text-sm text-gray-400">({currentData?.interactions?.[0]})</div>
                        </div>
                    </div>
                )}
                {metrics?.includes("impressions") && (
                    <div className="text-center flex border-r">
                        <div className="text-2xl">{new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(currentData?.impressions[currentData.impressions.length - 1])}</div>
                        <div className='mx-2'>
                            <div className="text-sm text-green-400">+{calculatePercentageChange(currentData?.impressions).toFixed(1)}%</div>
                            <div className="text-sm text-gray-400">({currentData?.impressions[0]})</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="h-44">
            <Line data={getData()} options={options} /></div>
        </div>
    );
};

export default VisitorsConnectionsChart;
