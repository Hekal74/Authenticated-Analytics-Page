// import UserAvatar from "/assets/user-avatar.png"
import "remixicon/fonts/remixicon.css";
// import WwaiLogo from "/assets/W_Logo.svg"
import { Link, useLocation  } from "react-router-dom";



interface SideBarProps {
  closeSidebar?: () => void;
  isOpen?: boolean; 

}
  
  const SideBar: React.FC<SideBarProps> = () => {

    const location = useLocation();

  return (
<div className="hidden lg:relative  top-0 h-full  w-[264px] bg-white lg:block  border-r-[1px] border-[#DEE1E7]">

      <div className="lg:w-full w-0  h-[64px] flex   border-b-[1px] border-[#DEE1E7] pt-[17px] pb-[17px] pl-[24px]">
        {/* <img className="lg:w-[163px] w-0" src={WwaiLogo} alt="wwai-logo" /> */}
        <span className="text-[#263978] font-bold text-lg">WORDWORKS</span>
      <span className="text-[#04CCFB] font-bold text-lg pl-1">AI</span>
      
      </div>


      <div className="lg:w-[216px]  p-[24px] ">
        <Link to="/introduction">
        <div className={`flex items-center w-[216px] h-[36px]   rounded-md gap-2 px-2 mb-1 group ${location.pathname === "/introduction" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`} >
          <i className={`ri-book-2-line text-[#9199B0] w-5 h-5 flex items-center justify-center group-hover:text-black ${location.pathname === "/introduction" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={`w-[176px] h-[20px]  group-hover:text-[#0028CA] ${location.pathname === "/introduction" ? "text-[#0028CA]" : "text-[#9199B0]"} flex items-center`}>Introduction</span>
        </div>
        </Link>
        <Link to="/health-care">
        <div className={`flex items-center w-[216px] h-[36px]    rounded-md gap-2 px-2 mb-1 group ${location.pathname === "/health-care" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`}>
          <i className={`ri-heart-pulse-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${location.pathname === "/health-care" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={` flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${location.pathname === "/health-care" ? "text-[#0028CA]" : "text-[#9199B0]"} `}>Healthcare</span>
        </div>
        </Link>
        <Link to="/automotive">
        <div className={`flex items-center w-[216px] h-[36px] rounded-md  gap-2 px-2 mb-1 group ${location.pathname === "/automotive" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`}>
          <i className={`ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${location.pathname === "/automotive" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={` flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${location.pathname === "/automotive" ? "text-[#0028CA]" : "text-[#9199B0]"} `}>Automotive</span>
        </div>
        </Link>
        
        <Link to="/e-commerce">
        <div className={`flex items-center w-[216px] h-[36px] rounded-md  gap-2 px-2 mb-1 group ${location.pathname === "/e-commerce" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`}>
          <i className={`ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${location.pathname === "/e-commerce" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={` flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${location.pathname === "/e-commerce" ? "text-[#0028CA]" : "text-[#9199B0]"} `}>E-commerce</span>
        </div>
        </Link>
        
        <Link to="/retail">
        <div className={`flex items-center w-[216px] h-[36px] rounded-md  gap-2 px-2 mb-1 group ${location.pathname === "/retail" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`}>
          <i className={`ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${location.pathname === "/retail" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={` flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${location.pathname === "/retail" ? "text-[#0028CA]" : "text-[#9199B0]"} `}>Retail</span>
        </div>
        </Link>
        <Link to="/travel">
        <div className={`flex items-center w-[216px] h-[36px] rounded-md  gap-2 px-2 mb-1 group ${location.pathname === "/travel" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`}>
          <i className={`ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${location.pathname === "/travel" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={` flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${location.pathname === "/travel" ? "text-[#0028CA]" : "text-[#9199B0]"} `}>Travel</span>
        </div>
        </Link>
        
        <Link to="/financial">
        <div className={`flex items-center w-[216px] h-[36px] rounded-md  gap-2 px-2 mb-1 group ${location.pathname === "/financial" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`}>
          <i className={`ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${location.pathname === "/financial" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={` flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${location.pathname === "/financial" ? "text-[#0028CA]" : "text-[#9199B0]"} `}>Financial</span>
        </div>
        </Link>
        
        <Link to="/real-estate">
        <div className={`flex items-center w-[216px] h-[36px] rounded-md  gap-2 px-2 mb-1 group ${location.pathname === "/real-estate" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`}>
          <i className={`ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${location.pathname === "/real-estate" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={` flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${location.pathname === "/real-estate" ? "text-[#0028CA]" : "text-[#9199B0]"} `}>Real Estate</span>
        </div>
        </Link>
        
        <Link to="/manufacturing">
        <div className={`flex items-center w-[216px] h-[36px] rounded-md  gap-2 px-2 mb-1 group ${location.pathname === "/manufacturing" ? " bg-[#E6EAFA] text-black" : "border-transparent  hover:bg-[#E6EAFA]"}`}>
          <i className={`ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black ${location.pathname === "/manufacturing" ? "text-black" : "text-[#9199B0]"} `}></i>
          <span className={` flex items-center w-[176px] h-[20px] group-hover:text-[#0028CA] ${location.pathname === "/manufacturing" ? "text-[#0028CA]" : "text-[#9199B0]"} `}>Manufacturing</span>
        </div>
        </Link>
        

      </div>

      {/* Rate Us section */}
      <div className="p-2 bg-gray-100 rounded-lg flex items-center justify-between lg:hidden">
        <span>⭐ Rate us</span>
      </div>

      {/* Get Full Version Button */}
      <button className=" w-full bg-blue-600 text-white py-2 rounded-lg lg:hidden">
        Get Full version →
      </button>

      {/* Plan Information */}
      <div className="">
        {/* 12 days left */}
        {/* <div className=" absolute bottom-[92px]  mx-6 pl-2 bg-[#E6EAFA] w-[216px] h-[52px] rounded-lg flex items-center space-x-2 text-[#0028CA]">
          <div className=" rounded-full w-[32px] h-[32px] flex items-center justify-center">
            <i className="ri-history-line"></i>
          </div>
          <div>
            <p className="text-sm font-semibold">12 days left</p>
            <p className="text-xs text-[#656E8B]">Get the full version now</p>
          </div>
        </div> */}

        {/* User Data */}
        <div className="absolute bottom-6  mx-6 pl-2 flex items-center space-x-3 w-[216px] h-[52px]   rounded-lg  ">
          {/* <img
            src={UserAvatar}
            alt="User Avatar"
            className="w- h-8rounded-full object-cover"
          /> */}
          <div className=" w-8 h-8 flex items-center justify-center bg-[#04CCFB] text-white text-xs font-bold rounded-full">
      MH
    </div>
          <div>
            <p className="text-sm font-medium text-[#20232C]">M. Hussain</p>
            <p className="text-xs text-[#9199B0]">Admin</p>
          </div>
        </div>
      </div>

    </div>
  );
}; 

export default SideBar;
