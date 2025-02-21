import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SearchIcon from "/assets/search-icon.png";
import CustomerAvatar from "/assets/customer-avater.png";
import LikeLogo from "/assets/like-logo.png";
import NaturalLogo from "/assets/natural-logo.png";
import DislikeLogo from "/assets/dislike-logo.png";

import { Bar, Pie, Line } from "react-chartjs-2";

// 1) Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsSection: React.FC = () => {
  // -----------------------------
  // DATA & OPTIONS
  // -----------------------------
  // 1) CUSTOMER SATISFACTION (text-only, no chart)
  const totalCustomers = 156;
  const positive = 80;
  const neutral = 15;
  const negative = 5;

  // 2) CONVERSATION TREND (Bar)
  const conversationData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Conversations",
        data: [5000, 10456, 7500, 20000, 10000, 35000, 1500],
        backgroundColor: "#B0BCEF",
        hoverBackgroundColor: "#0028CA", // Color when hovering

        borderRadius: 4,

      },
    ],
  };
  const conversationOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 1, // Adjust this value to make the lines thinner
      },
      point: {
        radius: 2, // Optional: Adjust point size if needed
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: false,
        ticks: {
          stepSize: 2000,

        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        bodyFont: { size: 12 },
      },
    },
    barThickness: 10, // Fixed thickness for bars
    maxBarThickness: 20, // Optional: Limit the maximum bar thickness
  };

  // 3) TICKET BY FIRST REPLY TIME (Pie)
  const ticketReplyData = {
    labels: ["0-1 secs", "1-8 secs", "8-24 secs", "+24 secs", "No replies",],
    datasets: [
      {
        data: [26, 45, 12, 4, 2],
        backgroundColor: [
          "#3AC828", // green
          "#FDB02B", // orange
          "#CB3BFF", // purple
          "#43DDFF", // cyan
          "#FD5839", // red
        ],
        borderWidth: 0,
      },
    ],
  };
  const ticketReplyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          size: 12,
        },
      },
    },
  };


  // 4) LIVE CHAT TRENDS (Line) - spans two columns
  const liveChatData = {
    labels: ['12 AM', '3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        label: 'This week',
        data: [0, 100, 400, 200, 250, 350, 150, 200],
        borderColor: '#43DDFF',
        backgroundColor: 'rgba(67, 221, 255, 0.2)',
        fill: true,
        tension: 0,
      },
      {
        label: 'Last week',
        data: [0, 600, 700, 750, 500, 100, 200, 180],
        borderColor: '#CB3BFF',
        backgroundColor: 'rgba(203, 59, 255, 0.2)',
        fill: true,
        tension: 0,
      },
    ],
  };


  const liveChatOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as "top" | "left" | "right" | "bottom", // ✅ Remove 'as const' here
        labels: {
          font: { size: 12 },
        },
      },
      tooltip: {
        bodyFont: { size: 12 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },

  };


  // 5) AVG. HANDLING TIME BY AGENT (Table)
  const agentData = [
    { name: "Shonda James", id: "#MN213", time: "833.09" },
    { name: "Kimberly Mastrangelo", id: "#KN123", time: "792.23" },
    { name: "Bhonda James", id: "#BN345", time: "653.09" },
    { name: "Stephanie Sharkey", id: "#SH213", time: "523.09" },
    { name: "Stephanie Nicol", id: "#SN134", time: "455.23" },
  ];

  // -----------------------------
  // RENDER
  // -----------------------------
  return (
    <div className="mt-8">
      {/* Page header: "Analytics" on the left, search on the right */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
  <h2 className="font-semibold text-xl text-gray-800">Analytics</h2>
  <div className="relative w-full sm:w-48 md:w-64">
    <input
      type="text"
      placeholder="Search widget"
      className="bg-white w-full px-4 py-2 pl-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <img
      src={SearchIcon}
      alt="search icon"
      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 opacity-50 text-left"
    />
  </div>
</div>


      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 lg:max-h-90">
        {/* 1) CUSTOMER SATISFACTION (2×2 text + icons) */}
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm w-full bg-white flex flex-col justify-between">
          {/* Card header */}
          <h3 className="font-medium text-gray-800">Customer satisfaction</h3>

          {/* 2×2 grid: Total responses, Positive, Neutral, Negative */}
          <div className="grid grid-cols-2 gap-11">
            {/* Total responses */}
            <div className="flex flex-col items-start space-x-2 space-y-2">
              {/* Replace with your own icon path or SVG */}
              <img
                src={CustomerAvatar}
                alt="User icon"
                className="w-5 h-5 mt-1"
              />
              <div>
                <p className="text-gray-500 text-xs">Total responses</p>
                <p className="text-gray-800 font-semibold text-base">
                  {totalCustomers} customers
                </p>
              </div>
            </div>

            {/* Positive */}
            <div className="flex flex-col items-start space-x-2 space-y-2">
              <img
                src={LikeLogo}
                alt="Thumbs up icon"
                className="w-5 h-5 mt-1"
              />
              <div>
                <p className="text-gray-500 text-xs">Positive</p>
                <p className="text-gray-800 font-semibold text-base">{positive}%</p>
              </div>
            </div>

            {/* Neutral */}
            <div className="flex flex-col items-start space-x-2 space-y-2">
              <img
                src={NaturalLogo}
                alt="Neutral icon"
                className="w-5 h-5 mt-1"
              />
              <div>
                <p className="text-gray-500 text-xs">Neutral</p>
                <p className="text-gray-800 font-semibold text-base">{neutral}%</p>
              </div>
            </div>

            {/* Negative */}
            <div className="flex flex-col items-start space-x-2 space-y-2">
              <img
                src={DislikeLogo}
                alt="Thumbs down icon"
                className="w-5 h-5 mt-1"
              />
              <div>
                <p className="text-gray-500 text-xs">Negative</p>
                <p className="text-gray-800 font-semibold text-base">{negative}%</p>
              </div>
            </div>
          </div>

          {/* Footer text */}

          <div>
            <hr className="text-gray-200" />
            <p className="mt-2 text-xs text-gray-500 text-right flex items-center">

              <span className=" w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center text-xs font-semibold mr-1">i</span>
              This information is based on last week
            </p>
          </div>
        </div>

        {/* 2) CONVERSATION TREND (BAR) */}
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm flex flex-col bg-white">
          <p className="font-medium text-gray-800">Conversation trend</p>
          <p className="text-xl font-bold text-gray-800 mt-2">10,456</p>
          <div className="mt-3 flex-1 h-48">
            <Bar data={conversationData} options={conversationOptions} />
          </div>
          <div>

            <hr className="text-gray-200" />

            <p className="mt-2 text-xs text-gray-500 text-right flex items-center">
              <span className=" w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center text-xs font-semibold mr-1">i</span>
              Total conversations of the day
            </p>
          </div>
        </div>

        {/* 3) TICKET BY FIRST REPLY TIME (PIE) */}
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between align-middle bg-white ">
          <p className="font-medium text-gray-800">Ticket by First Reply Time</p>
          <div className="flex items-center   ">
            <div className="w-1/2 h-48 not-even ">
              <Pie data={ticketReplyData} options={ticketReplyOptions} />
            </div>
            <div className="w-1/2 pl-4 ml-4">
              <ul>
                <li className="flex items-center mb-2">
                  <span className="inline-block w-3 h-3 bg-[#3AC828] rounded-full mr-2"></span>
                  0-1 secs - 26%
                </li>
                <li className="flex items-center mb-2">
                  <span className="inline-block w-3 h-3 bg-[#FDB02B] rounded-full mr-2"></span>
                  1-8 secs - 45%
                </li>
                <li className="flex items-center mb-2">
                  <span className="inline-block w-3 h-3 bg-[#CB3BFF] rounded-full mr-2"></span>
                  8-24 secs - 12%
                </li>
                <li className="flex items-center mb-2">
                  <span className="inline-block w-3 h-3 bg-[#43DDFF] rounded-full mr-2"></span>
                  +24 secs - 4%
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-[#FD5839] rounded-full mr-2"></span>
                  No replies - 2%
                </li>
              </ul>
            </div>
          </div>
          <div>

            <hr className="text-gray-200" />

            <p className="mt-2 text-xs text-gray-500 text-right flex items-center">
              <span className=" w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center text-xs font-semibold mr-1">i</span>
              This information is based on last week
            </p>
          </div>
        </div>

        {/* 4) LIVE CHAT TRENDS (LINE) - spans 2 columns */}

        <div className="p-4 border border-gray-200 rounded-lg shadow-sm flex flex-col lg:col-span-2 bg-white">
          <p className="font-medium text-gray-800">Live chat trends</p>
          <div className="mt-3 flex-1 h-56">

            <Line data={liveChatData} options={liveChatOptions} />
          </div>

        </div>

        {/* 5) AVG. HANDLING TIME BY AGENT (TABLE) */}
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm flex flex-col bg-white">
          <p className="font-medium text-gray-800">Avg. Handling time by Agent</p>
          <div className="overflow-x-auto mt-4 flex-1">
            <table className="min-w-full text-sm text-gray-700">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-2 px-3 font-medium text-left">Name</th>
                  <th className="py-2 px-3 font-medium text-left">Friend ID</th>
                  <th className="py-2 px-3 font-medium text-left">Time in secs</th>
                </tr>
              </thead>
              <tbody>
                {agentData.map((agent, idx) => (
                  <tr key={idx} className="border-b last:border-none">
                    <td className="py-2 px-3">{agent.name}</td>
                    <td className="py-2 px-3">{agent.id}</td>
                    <td className="py-2 px-3">{agent.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="text-gray-200" />
          <p className="mt-2 text-xs text-gray-500 text-right flex items-center">
            <span className=" w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center text-xs font-semibold mr-1">i</span>
            This information is based on last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
