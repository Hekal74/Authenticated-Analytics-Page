// import React, { useState  } from "react";
import UserAvatar from "/assets/user-avatar.png"
import "remixicon/fonts/remixicon.css";
import WwaiLogo from "/assets/W_Logo.svg"



interface SideBarProps {
  closeSidebar?: () => void;
  isOpen: boolean; // New prop to track if the sidebar is open
}


const SideBar: React.FC<SideBarProps> = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // Local state to control the visibility of the hide button
  // const [showHideBtn, setShowHideBtn] = useState(false);

  // Whenever the sidebar is opened again, reset the hide button to visible
  // useEffect(() => {
  //   if (isOpen) {
  //     setShowHideBtn(true);
  //   }
  // }, [isOpen]);

  // const handleClose = () => {
  //   // Hide the close button immediately
  //   setShowHideBtn(false);
  //   // Call the parent's closeSidebar function to hide the sidebar
  //   if (closeSidebar) {
  //     closeSidebar();
  //   }
  // };
  return (
    // onClick={() => setIsSidebarOpen(true)
<div className="hidden lg:relative  top-0 h-full w-0 lg:w-[264px] bg-white lg:block border-r-[1px] border-[#DEE1E7]">
{/* Hide button (only visible when showHideBtn is true) */}
      {/* <div className="hidden lg:block">
        {showHideBtn && closeSidebar && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-[-20px] bg-blue-600 text-white p-2 rounded-r-md shadow-lg"
          >
            &lt;
          </button>
        )}
      </div> */}

      {/* Sidebar content */}
      <div className="lg:w-full w-0  h-[64px] flex   border-b-[1px] border-[#DEE1E7] pt-[17px] pb-[17px] pl-[24px]">
        <img className="lg:w-[163px] w-0" src={WwaiLogo} alt="wwai-logo" />
      </div>


      <div className="lg:w-[216px]  p-[24px] ">
        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-book-2-line text-[#9199B0] w-5 h-5 flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0] group-hover:text-black flex items-center">Introduction</span>
        </div>
        </a>

        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-heart-pulse-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black"></i>
          <span className="text-[#9199B0] group-hover:text-black">Healthcare</span>
        </div>
        </a>
        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-car-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black"></i>
          <span className="text-[#9199B0] group-hover:text-black">Automotive</span>
        </div>
        </a>
        
        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-handbag-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black"></i>
          <span className="text-[#9199B0] group-hover:text-black">E-commerce</span>
        </div>
        </a>
        
        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-hand-coin-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black"></i>
          <span className="text-[#9199B0] group-hover:text-black">Retail</span>
        </div>
        </a>
        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-plane-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black"></i>
          <span className="text-[#9199B0] group-hover:text-black">Travel</span>
        </div>
        </a>
        
        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-money-dollar-circle-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black"></i>
          <span className="text-[#9199B0] group-hover:text-black">Financial</span>
        </div>
        </a>
        
        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-building-2-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black"></i>
          <span className="text-[#9199B0] group-hover:text-black">Real Estate</span>
        </div>
        </a>
        
        <a href="">
        <div className="flex items-center w-[216px] h-[36px] border border-transparent hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 px-2 mb-1 group">
          <i className="ri-tools-line w-4 h-4 text-[#9199B0] flex items-center justify-center group-hover:text-black"></i>
          <span className="text-[#9199B0] group-hover:text-black">Manufacturing</span>
        </div>
        </a>
        

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
        <div className=" absolute bottom-[92px]  mx-6 pl-2 bg-[#E6EAFA] w-[216px] h-[52px] rounded-lg flex items-center space-x-2 text-[#0028CA]">
          <div className=" rounded-full w-[32px] h-[32px] flex items-center justify-center">
            <i className="ri-history-line"></i>
          </div>
          <div>
            <p className="text-sm font-semibold">12 days left</p>
            <p className="text-xs text-[#656E8B]">Get the full version now</p>
          </div>
        </div>

        {/* User Data */}
        <div className="absolute bottom-6  mx-6 pl-2 flex items-center space-x-3 hover:bg-[#F3F4F6] hover:border-[#C1C5D2]  rounded-lg w-[216px] h-[52px] border-[1px] border-[#DEE1E7]">
          <img
            src={UserAvatar}
            alt="User Avatar"
            className="w-[32px] h-[32px] rounded-full object-cover"
          />
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
