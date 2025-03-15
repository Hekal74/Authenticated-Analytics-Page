import "remixicon/fonts/remixicon.css";
import { Link, useLocation } from "react-router-dom";

interface SideBarProps {
  closeSidebar?: () => void;
  isOpen?: boolean;
  userName?: string; 
}

const SideBar: React.FC<SideBarProps> = ({ closeSidebar, isOpen, userName = "User" }) => {
  const location = useLocation();

  // Function to generate initials from the user's name
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part.charAt(0)).join("");
    return initials.slice(0, 2).toUpperCase(); // Limit to 2 characters
  };

  return (
    <div 
      className={`${isOpen ? "block fixed z-50 w-full h-screen overflow-y-auto" : "hidden md:block"} md:fixed h-screen md:h-full w-[280px] bg-white border-r-[1px] border-[#DEE1E7] overflow-y-auto`}
    >
      <div className="w-full h-[64px] flex border-b-[1px] border-[#DEE1E7] pt-[17px] pb-[17px] pl-[24px] sticky top-0 bg-white z-10">
        <span className="text-[#263978] font-bold text-lg">WORDWORKS</span>
        <span className="text-[#04CCFB] font-bold text-lg pl-1">AI</span>
      </div>

      <div className="p-[24px] overflow-y-auto flex-grow">
        <Link to="/introduction" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/introduction" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-book-2-line text-[#9199B0] w-5 h-5 flex items-center justify-center group-hover:text-black ${
                location.pathname === "/introduction" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/introduction" ? "text-[#0028CA]" : "text-[#9199B0]"
              } flex items-center`}
            >
              Introduction
            </span>
          </div>
        </Link>
        <Link to="/health-care" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/health-care" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-heart-pulse-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/health-care" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/health-care" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              Healthcare
            </span>
          </div>
        </Link>
        {/* Remaining menu items remain unchanged */}
        <Link to="/automotive" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/automotive" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/automotive" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/automotive" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              Automotive
            </span>
          </div>
        </Link>
        <Link to="/e-commerce" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/e-commerce" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-shopping-cart-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/e-commerce" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/e-commerce" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              E-commerce
            </span>
          </div>
        </Link>
        <Link to="/retail" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/retail" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-store-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/retail" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/retail" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              Retail
            </span>
          </div>
        </Link>
        <Link to="/travel" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/travel" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-plane-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/travel" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/travel" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              Travel
            </span>
          </div>
        </Link>
        <Link to="/financial" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/financial" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-bank-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/financial" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/financial" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              Financial
            </span>
          </div>
        </Link>
        <Link to="/real-estate" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/real-estate" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-home-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/real-estate" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/real-estate" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              Real Estate
            </span>
          </div>
        </Link>
        <Link to="/manufacturing" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/manufacturing" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-building-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/manufacturing" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/manufacturing" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              Manufacturing
            </span>
          </div>
        </Link>
        <Link to="/others" onClick={closeSidebar}>
          <div
            className={`flex items-center w-full h-[36px] rounded-md gap-2 px-2 mb-1 group ${
              location.pathname === "/others" ? "bg-[#E6EAFA] text-black" : "border-transparent hover:bg-[#E6EAFA]"
            }`}
          >
            <i
              className={`ri-apps-fill w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${
                location.pathname === "/others" ? "text-black" : "text-[#9199B0]"
              }`}
            ></i>
            <span
              className={`flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${
                location.pathname === "/others" ? "text-[#0028CA]" : "text-[#9199B0]"
              }`}
            >
              Others
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile-only elements */}
      {isOpen && (
        <div className="md:hidden p-4 space-y-4">
          <div className="p-2 bg-gray-100 rounded-lg flex items-center justify-between">
            <span>⭐ Rate us</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Get Full version →
          </button>
        </div>
      )}

      {/* User profile section */}
      <div className="fixed lg:bottom-6 mx-6 mb-6 pl-2 flex items-center space-x-3 w-[216px] h-[52px] rounded-lg bg-white">
        <div className="w-8 h-8 flex items-center justify-center bg-[#04CCFB] text-white text-xs font-bold rounded-full">
          {getInitials(userName)} {/* Dynamically generate initials */}
        </div>
        <div>
          <p className="text-sm font-medium text-[#20232C]">{userName}</p> {/* Display user's name */}
          <p className="text-xs text-[#9199B0]">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;