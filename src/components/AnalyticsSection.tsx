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
import "remixicon/fonts/remixicon.css";
import { Bar, Pie, Line } from "react-chartjs-2";
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
  const totalCustomers = 156;
  const positive = 80;
  const neutral = 15;
  const negative = 5;
  const conversationData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Conversations",
        data: [5000, 10456, 7500, 20000, 10000, 35000, 1500],
        backgroundColor: "#B0BCEF",
        hoverBackgroundColor: "#0028CA",
        borderRadius: 4,
      },
    ],
  };
  const conversationOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 2,
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
    barThickness: 10,
    maxBarThickness: 20,
  };
  const ticketReplyData = {
    labels: ["0-1 secs", "1-8 secs", "8-24 secs", "+24 secs", "No replies",],
    datasets: [
      {
        data: [26, 45, 12, 4, 2],
        backgroundColor: [
          "#3AC828",
          "#FDB02B",
          "#CB3BFF",
          "#43DDFF",
          "#FD5839",
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
        position: "bottom" as "top" | "left" | "right" | "bottom",
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
  const agentData = [
    { name: "Shonda James", id: "#MN213", time: "833.09" },
    { name: "Kimberly Mastrangelo", id: "#KN123", time: "792.23" },
    { name: "Bhonda James", id: "#BN345", time: "653.09" },
    { name: "Stephanie Sharkey", id: "#SH213", time: "523.09" },
    { name: "Stephanie Nicol", id: "#SN134", time: "455.23" },
  ];
  return (
    <div className="pt-6 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-9">
        <h2 className="font-semibold text-[16px] text-[#20232C] pt-[6px]">Analytics</h2>
        <div className="relative w-[240px]">
          <input
            type="text"
            placeholder="Search widget"
            className="bg-white px-2 py-2 text-[#9199B0] font-medium rounded-lg text-sm border border-[#DEE1E7] h-9 w-full pr-10 focus:border-[2px] focus:border-[#0028CA] focus:outline-none"
          />
          <i className="ri-search-line absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C1C5D2] flex items-center justify-center"></i>
        </div>
      </div>
      {/* Main  layout */}
      <div className="mt-2 lg:max-h-90  flex flex-col gap-y-6 w-full  ">
        <div className="flex flex-row lg:space-x-6 justify-between">

          {/* 1 */}
          <div className="p-4 border-[1px] border-[#F3F4F6]  rounded-lg  lg:w-[360px] lg:h-[272px] bg-white flex flex-col  ">
            <h3 className="font-semibold text-sm text-[#20232C] border-b-[1px] border-b-[#F3F4F6] -mx-4 px-4 pb-3">Customer satisfaction</h3>
            <div className="grid grid-cols-2 gap-11 h-[200px]">
              <div className="flex flex-col items-start space-x-2 space-y-2 mt-4">
                <i className="ri-user-voice-line w-4 h-4 text-[#0028CA] "></i>
                <div>
                  <p className="text-gray-500 text-xs">Total responses</p>
                  <p className="text-gray-800 font-semibold text-base">
                    {totalCustomers} customers
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-x-2 space-y-2 mt-4">
                <i className="ri-thumb-up-line w-4 h-4 text-[#3AC828]"></i>
                <div>
                  <p className="text-gray-500 text-xs">Positive</p>
                  <p className="text-gray-800 font-semibold text-base">{positive}%</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-x-2 space-y-2">
                <i className="ri-checkbox-blank-circle-line w-4 h-4 text-[#9199B0]"></i>
                <div>
                  <p className="text-gray-500 text-xs">Neutral</p>
                  <p className="text-gray-800 font-semibold text-base">{neutral}%</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-x-2 space-y-2">
                <i className="ri-thumb-down-line w-4 h-4 text-[#FD5839]"></i>
                <div>
                  <p className="text-gray-500 text-xs">Negative</p>
                  <p className="text-gray-800 font-semibold text-base">{negative}%</p>
                </div>
              </div>
            </div>
            <div className='h-8'>
              <p className=" text-xs text-gray-500 text-right flex items-center border-t-[1px] -mx-4 border-t-[#F3F4F6] px-4 py-2 gap-1 ">
                <i className="ri-information-line text-[#9199B0] w-4 h-4"></i>
                This information is based on last week
        
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="p-4 border-[1px] border-[#F3F4F6]  rounded-lg  lg:w-[360px] lg:h-[272px]  flex flex-col bg-white">
            <p className="font-semibold text-sm text-[#20232C] border-b-[1px] border-b-[#F3F4F6] -mx-4 px-4 pb-3 h-10">Conversation trend</p>
            <div className="mt-3 flex-1 h-[200px]">
              <Bar data={conversationData} options={conversationOptions} />
            </div>
            <div className='h-8'>
              <p className=" text-xs text-gray-500 text-right flex items-center border-t-[1px] -mx-4 border-t-[#F3F4F6] px-4 py-2 gap-1 ">
              <span className="inline-block w-2 h-2 bg-[#B0BCEF]  mr-2 "></span>
                This information is based on last week
        
              </p>
            </div>
          </div>
            
          {/* 3 */}
          <div className=" border-[1px] border-[#F3F4F6]  rounded-lg  lg:w-[360px] lg:h-[272px] flex flex-col   bg-white">
            <p className="font-semibold text-sm text-[#20232C]  -mx-4 px-7 p-3">Ticket by First Reply Time</p>
            <div className="flex flex-row items-center border-t-[1px] border-t-[#F3F4F6]  gap-1  ">
              <div className="w-[164px] h-[176px] flex items-center justify-center  ">
                <div className="w-[136px] h-[136px] ml-5 ">
                <Pie data={ticketReplyData} options={ticketReplyOptions} />
                </div>
              </div>
              <div className="flex flex-row w-[164px] h-[176px] ">
              <div className="pt-8 ml-6">
                <ul className="text-[#9199B0] font-medium text-xs ">
                  <li className="flex items-center mb-2  ">
                    <span className=" w-2 h-2 bg-[#3AC828]  mr-2"></span>
                    0-1 secs 
                    <span className="ml-12 text-[#20232C] font-semibold text-xs">26%</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 bg-[#FDB02B]  mr-2"></span>
                    1-8 secs
                    <span className="ml-12 text-[#20232C] font-semibold text-xs">45%</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 bg-[#CB3BFF]  mr-2"></span>
                    
                    8-24 secs 
                    <span className="ml-11 text-[#20232C] font-semibold text-xs">12%</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 bg-[#43DDFF]  mr-2"></span>
                    +24 secs
                    <span className="ml-13 text-[#20232C] font-semibold text-xs">4%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-[#FD5839]  mr-2"></span>
                    No replies 
                    <span className="ml-12 text-[#20232C] font-semibold text-xs">2%</span>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            <div className='h-9'>
              <p className=" text-xs text-gray-500 text-right flex items-center border-t-[1px] -mx-4 border-t-[#F3F4F6] px-4 py-2 gap-1 ">
                <i className="ri-information-line text-[#9199B0] w-4 h-4"></i>
                This information is based on last week
        
              </p>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-row lg:space-x-6 gap-y-6 w-full justify-between">
          <div className="p-4 border-[1px] border-[#F3F4F6]  rounded-lg  lg:w-[744px] lg:h-[272px] flex flex-col lg:col-span-2 bg-white lg:mt-6">
            <p className="font-semibold text-sm text-[#20232C] border-b-[1px] border-b-[#F3F4F6] -mx-4 px-4 pb-3">Live chat trends</p>
            <div className="mt-3 flex-1 h-56">
              <Line data={liveChatData} options={liveChatOptions} />
            </div>
          </div>

          {/* 5 */}
          <div className="p-4 border-[1px] border-[#F3F4F6]  rounded-lg  lg:w-[360px] lg:h-[272px] flex flex-col bg-white lg:mt-6">
            <div className="font-semibold text-sm text-[#20232C] border-b-[1px] border-b-[#F3F4F6] -mx-4 px-4 h-10 ">
            Avg. Handling time by Agent

            </div>
      
            <div className="overflow-x-auto mt-4 flex-1 h-[200px]">
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
                  <div className="h-[32px]"></div>
              <p className="mt-2 text-xs text-gray-500 text-right flex items-center border-t-[1px] -mx-4 border-t-[#F3F4F6] px-4 py-4 ">
                <i className="ri-information-line text-[#9199B0] w-4 h-4"></i>
                This information is based on last week
        
              </p>
            
          </div>
        </div>

      </div>


    </div>
  );
};

export default AnalyticsSection;
