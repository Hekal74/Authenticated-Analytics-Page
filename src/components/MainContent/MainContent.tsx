import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import AnalyticsSection from "../AnalyticsSection";
import AtlassianLogo from "/assets/Logo Box.svg";
import AmazonLogo from "/assets/Logo Box-1.svg";
import GoogleLogo from "/assets/Logo Box-2.svg";
import ZohoLogo from "/assets/Logo Box-3.svg";
import MicrosoftLogo from "/assets/Logo Box-4.svg";
import WhatsappLogo from "/assets/Logo Box-5.svg";
import TelegramLogo from "/assets/Logo Box-6.svg";
import InstaLogo from "/assets/Logo Box-7.svg";
import OtherIntegrationLogo from "/assets/Logo Box-8.svg";
import MessengerLogo from "/assets/Logo Box-9.svg";
import BajajLogo from "/assets/Logo Box-10.svg";
import HyundaiLogo from "/assets/Logo Box-12.svg";
import ApolloLogo from "/assets/Logo Box-11.svg";
import PepsiLogo from "/assets/Logo Box-13.svg";
import FortisLogo from "/assets/Logo Box-14.svg";

const MainContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex" style={{ backgroundColor: "#FCFCFD", height: "836px" }}>
      {/* Sidebar container (conditionally rendered) */}
      {isSidebarOpen && (
        <div className="lg:w-[264px] w-0 bg-white  z-30 fixed inset-0  transition-transform duration-300">
          <SideBar isOpen={isSidebarOpen} />
        </div>
      )}
      {/* Button to reopen the sidebar when it's hidden */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-0 top-1/2 transform -transla te-y-1/2 z-40 bg-blue-600 text-white p-2 rounded-r-md shadow-lg hidden lg:block"
        >
          &gt;
        </button>
      )}
      {/* Main content */}
      <div className="flex-grow transition-all duration-300 lg:ml-[264px] pt-[64px]">
        <div className="p-4 lg:p-6 ">
          <div className='h-[156px] gap-4 flex-col flex  '>
            <div className="text-left w-full h-[80px]">
              <h1 className="font-semibold text-2xl h-[32px] text-[#20232C]">Welcome to WordWorksAI</h1>
              <p
                className={`font-medium text-sm h-[40px]  mt-2  lg: ${isSidebarOpen
                  ? " text-left"
                  : "text-left lg:whitespace-nowrap"
                  }`}
                style={{ color: "#9199B0" }}
              >
                Enhance response accuracy and speed with our Gen AI chatbots, providing instant,
                reliable support 24/7 to <br /> boost customer engagement and efficiency.
              </p>
            </div>
            <div
              className={`  justify-between h-[60px] w-full  ${isSidebarOpen
                ? "flex flex-row  gap-5"
                : "grid grid-cols-1 md:grid-cols-2 lg:flex lg:gap-13"
                }`}
            >
              {/* Our Partners */}
              <div
                className={`text-center lg:w-[360px] lg:text-left flex flex-row md:flex-row items-center  sm:flex-row sm:w-full sm:justify-between justify-between ${isSidebarOpen ? "gap-5" : "justify-between lg:gap-16 gap-4"
                  } bg-white px-4 py-2  border-[1px] border-[#F3F4F6] rounded-md`}
              >
                <p className={` ${isSidebarOpen ? "text-lg mt-0" : "text-lg mt-1"} text-[#20232C] text-sm font-medium   leading-5`}>Our Partners</p>
                <div className="flex w-[168px]   -space-x-2 lg:mb-3 ">
                  <img
                    className={`transition-all  w-10 h-10 sm:w-8 sm:h-8   ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={AtlassianLogo}
                    alt="atlassiam-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={AmazonLogo}
                    alt="aws-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={GoogleLogo}
                    alt="google-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={ZohoLogo}
                    alt="zoho-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={MicrosoftLogo}
                    alt="microsoft-logo"
                  />
                </div>
              </div>
              {/* Integrations */}
              <div
                className={`text-center lg:text-left flex flex-row md:flex-row items-center  sm:flex-row sm:justify-between  justify-between ${isSidebarOpen ? "gap-5" : "justify-between lg:gap-16 gap-4"
                  } bg-white  px-4 py-2 lg:w-[360px] border-b border-[#F3F4F6] rounded-md`}
              >
                <p className={` ${isSidebarOpen ? "text-lg mt-0" : "text-lg mt-1"} text-[#20232C] text-sm font-medium  leading-5 `}>Integrations</p>
                <div className="flex w-[168px] -space-x-2 lg:mb-3">
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10    ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={WhatsappLogo}
                    alt="whatsapp-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8   w-10 h-10  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2 "
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={TelegramLogo}
                    alt="telegram-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8   w-10 h-10  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={InstaLogo}
                    alt="insta-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8   w-10 h-10  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={OtherIntegrationLogo}
                    alt="other-integration"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8   w-10 h-10  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2 "
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={MessengerLogo}
                    alt="messanger-logo"
                  />
                </div>
              </div>
              {/* Our Customers */}
              <div
                className={`text-center lg:text-left flex flex-row justify-between items-center   sm:justify-between   ${isSidebarOpen ? "gap-5" : "justify-between lg:gap-16 gap-4"
                  } bg-white  px-2 py-2 lg:w-[360px] border-b border-[#F3F4F6] rounded-md`}
              >
                <p className={` ${isSidebarOpen ? "text-lg mt-0" : "text-lg mt-1"} text-[#20232C] text-sm font-medium  leading-5`}>Our Customers</p>
                <div className="flex w-[168px] -space-x-2 lg:mb-3">
                  <img
                    className={`transition-all  w-10 h-10  sm:w-8 sm:h-8      ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2 "
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={BajajLogo}
                    alt="bajaj-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10    ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={HyundaiLogo}
                    alt="hyundai-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10    ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={ApolloLogo}
                    alt="apollo-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10    ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={PepsiLogo}
                    alt="pepsi-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8  w-10 h-10    ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                      }`}
                    src={FortisLogo}
                    alt="fortis-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Analytics Section */}
          <AnalyticsSection />
        </div>
      </div>
    </div>
  );
};
export default MainContent;
