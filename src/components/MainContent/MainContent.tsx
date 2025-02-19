import { useState } from "react";
import AnalyticsSection from "../AnalyticsSection";
import SideBar from "../SideBar/SideBar";

const MainContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex" style={{ backgroundColor: "#FCFCFD" }}>
      {/* Sidebar container (conditionally rendered) */}
      {isSidebarOpen && (
        <div className="w-72 bg-white shadow-lg z-30 fixed inset-0 lg:relative transition-transform duration-300">
          <SideBar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
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
      <div className="flex-grow transition-all duration-300">
        <div className="p-4 lg:p-8">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-2xl lg:text-3xl">Welcome to WordWorksAI</h1>
            <p
              className={`font-light text-sm lg:text-base mt-2 lg:max-w-3xl lg: ${
                isSidebarOpen
                  ? "text-left"
                  : "whitespace-nowrap"
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
            className={`mt-6 lg:mt-8 ${
              isSidebarOpen
                ? "flex flex-row items-start gap-4"
                : "grid grid-cols-1 md:grid-cols-2 lg:flex lg:gap-13"
            }`}
          >
            {/* Our Partners */}
            <div
              className={`text-center lg:text-left flex flex-col md:flex-row items-center ${
                isSidebarOpen ? "gap-4" : "flex flex-wrap justify-center lg:justify-between gap-20"
              } bg-white px-4 py-2 w-fit border-b border-[#F3F4F6] rounded-md`}
            >
              <p className="text-lg mt-3">Our Partners</p>
              <div className="flex gap-2 lg:mb-3">
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-8 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/atlassiam-logo.png"
                  alt="atlassiam-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-8 lg:h-5 lg:mt-5"
                  }`}
                  src="/src/assets/aws-logo.png"
                  alt="aws-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-8 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/google-logo.png"
                  alt="google-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/zoho-logo.png"
                  alt="zoho-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-12 lg:w-8 lg:h-4 lg:mt-2"
                      : "w-16 lg:w-12 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/microsoft-logo.png"
                  alt="microsoft-logo"
                />
              </div>
            </div>

            {/* Integrations */}
            <div
              className={`text-center lg:text-left flex flex-col md:flex-row items-center ${
                isSidebarOpen ? "gap-4" : "flex flex-wrap justify-center lg:justify-between gap-20"
              } bg-white px-4 py-2 w-fit border-b border-[#F3F4F6] rounded-md`}
            >
              <p className="text-lg mt-3">Integrations</p>
              <div className="flex gap-2 lg:mb-3">
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/whatsapp-logo.png"
                  alt="whatsapp-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/telegram-logo.png"
                  alt="telegram-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/insta-logo.png"
                  alt="insta-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/image.png"
                  alt="other-integration"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/messanger-logo.png"
                  alt="messanger-logo"
                />
              </div>
            </div>

            {/* Our Customers */}
            <div
              className={`text-center lg:text-left flex flex-col md:flex-row items-center ${
                isSidebarOpen ? "gap-4" : "flex flex-wrap justify-center lg:justify-between gap-16"
              } bg-white px-4 py-2 w-fit border-b border-[#F3F4F6] rounded-md`}
            >
              <p className="text-lg mt-3">Our Customers</p>
              <div className="flex gap-2 lg:mb-3">
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/logo-bajaj.png"
                  alt="bajaj-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/hyundai-logo.png"
                  alt="hyundai-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-8 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-10 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/apollo-logo.png"
                  alt="apollo-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-6 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/pepssi-logo.png"
                  alt="pepsi-logo"
                />
                <img
                  className={`transition-all ${
                    isSidebarOpen
                      ? "w-10 lg:w-6 lg:h-4 lg:mt-2"
                      : "w-12 lg:w-8 lg:h-6 lg:mt-4"
                  }`}
                  src="/src/assets/fortis-logo.png"
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
