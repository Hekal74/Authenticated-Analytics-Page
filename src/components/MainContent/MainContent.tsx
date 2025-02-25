import FortisLogo from "/assets/fortis-logo.png";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import AtlassianLogo from "/assets/atlassiam-logo.png";
import AmazonLogo from "/assets/aws-logo.png";
import GoogleLogo from "/assets/google-logo.png";
import ZohoLogo from "/assets/zoho-logo.png";
import MicrosoftLogo from "/assets/microsoft-logo.png";
import WhatsappLogo from "/assets/whatsapp-logo.png";
import TelegramLogo from "/assets/telegram-logo.png";
import AnalyticsSection from "../AnalyticsSection";
import OtherIntegrationLogo from "/assets/image.png";
import InstaLogo from "/assets/insta-logo.png";
import BajajLogo from "/assets/logo-bajaj.png";
import HyundaiLogo from "/assets/hyundai-logo.png";
import MessengerLogo from "/assets/messanger-logo.png";
import ApolloLogo from "/assets/apollo-logo.png";
import PepsiLogo from "/assets/pepssi-logo.png";

const MainContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex" style={{ backgroundColor: "#FCFCFD" }}>
      {/* Sidebar container (conditionally rendered) */}
      {isSidebarOpen && (
        <div className="w-[264px] bg-white  z-30 fixed inset-0  transition-transform duration-300">
          <SideBar isOpen={isSidebarOpen}  /> 
        </div>
      )}

      {/* Button to reopen the sidebar when it's hidden */}
      {!isSidebarOpen && (    
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 bg-blue-600 text-white p-2 rounded-r-md shadow-lg hidden lg:block"
        >
          &gt;
        </button>
      )}

      {/* Main content */}
      <div className="flex-grow transition-all duration-300 ml-[264px]">
        <div className="p-4 lg:p-8">
          <div className="lg:text-left text-left">
            <h1 className="font-bold text-2xl lg:text-3xl">Welcome to WordWorksAI</h1>
            <p
              className={`font-light text-sm lg:text-base mt-2 lg:max-w-3xl lg: ${isSidebarOpen
                  ? " text-left" 
                  : "text-left lg:whitespace-nowrap" 
                }`}
 
              style={{ color: "#9199B0" }}
            >
              Enhance response accuracy and speed with our Gen AI chatbots, providing instant,
              reliable support 24/7 to boost customer engagement and efficiency.
            </p>
          </div>

          {/* Sections Container */}
          {/* إذا كان الـ sidebar مفتوح، نستخدم flex-row مع فجوات أقل؛ وإلا نستخدم التخطيط الأصلي */}
          <div
            className={`mt-6 lg:mt-8 justify-between ${isSidebarOpen
                ? "flex flex-row  gap-5"
                : "grid grid-cols-1 md:grid-cols-2 lg:flex lg:gap-13"
              }`}
          >
            {/* Our Partners */}
            <div
              className={`text-center lg:text-left flex flex-row md:flex-row items-center mt-2 sm:flex-row sm:w-full sm:justify-between justify-between ${isSidebarOpen ? "gap-5" : "justify-between lg:gap-16 gap-4"
                } bg-white px-4 py-2 w-full border-b border-[#F3F4F6] rounded-md`}



            >
              <p className={` ${isSidebarOpen ? "text-lg mt-0" : "text-lg mt-1"} `}>Our Partners</p>
              <div className="flex   -space-x-2 lg:mb-3 ">
                <img
                  className={`transition-all  w-12 h-12 sm:w-8 sm:h-8 rounded-full  object-contain border border-gray-300  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={AtlassianLogo}
                  alt="atlassiam-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={AmazonLogo}
                  alt="aws-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={GoogleLogo}
                  alt="google-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={ZohoLogo}
                  alt="zoho-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 ${isSidebarOpen
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
              className={`text-center lg:text-left flex flex-row md:flex-row items-center mt-2 sm:flex-row sm:justify-between  justify-between ${isSidebarOpen ? "gap-5" : "justify-between lg:gap-16 gap-4"
                } bg-white  px-4 py-2 w-full border-b border-[#F3F4F6] rounded-md`}

            >
              <p className={` ${isSidebarOpen ? "text-lg mt-0" : "text-lg mt-1"} `}>Integrations</p>
              <div className="flex -space-x-2 lg:mb-3">
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 p-1  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={WhatsappLogo}
                  alt="whatsapp-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 p-1 ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2 "
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={TelegramLogo}
                  alt="telegram-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 p-1 ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={InstaLogo}
                  alt="insta-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 p-1 ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={OtherIntegrationLogo}
                  alt="other-integration"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 rounded-full w-12 h-12 object-contain border border-gray-300 p-1 ${isSidebarOpen
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
              className={`text-center lg:text-left flex flex-row justify-between items-center mt-2  sm:justify-between   ${isSidebarOpen ? "gap-5" : "justify-between lg:gap-16 gap-4"
                } bg-white  px-2 py-2 w-full border-b border-[#F3F4F6] rounded-md`}

            >
              <p className={` ${isSidebarOpen ? "text-lg mt-0" : "text-lg mt-1"} `}>Our Customers</p>
              <div className="flex -space-x-2 lg:mb-3">

                <img
                  className={`transition-all w-12 h-12 sm:w-8 sm:h-8 p-1 rounded-full  object-contain border border-gray-300    ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2 "
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={BajajLogo}
                  alt="bajaj-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 p-1 rounded-full w-12 h-12 object-contain border border-gray-300  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={HyundaiLogo}
                  alt="hyundai-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 p-1 rounded-full w-12 h-12 object-contain border border-gray-300  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={ApolloLogo}
                  alt="apollo-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 p-1 rounded-full w-12 h-12 object-contain border border-gray-300  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={PepsiLogo}
                  alt="pepsi-logo"
                />
                <img
                  className={`transition-all sm:w-8 sm:h-8 p-1 rounded-full w-12 h-12 object-contain border border-gray-300  ${isSidebarOpen
                      ? "w-10 lg:w-10 lg:h-10 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-10 lg:mt-4"
                    }`}
                  src={FortisLogo}
                  alt="fortis-logo"
                />
              </div>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="mt-12">
            <AnalyticsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
