// import React, { useState  } from "react";
import UserAvatar from "/assets/user-avatar.png"
import "remixicon/fonts/remixicon.css";
import WwaiLogo from "/assets/wwai-logo.png"



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
    <div className=" h-[900px] w-[264px]  bg-white lg:block hidden border-r-[1px] border-[#DEE1E7] ">
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
      <div className="w-[264px] h-[64px] flex   border-b-[1px] border-[#DEE1E7] pt-[17px] pb-[17px] pl-[24px]">
        <img className="w-[163px]" src={WwaiLogo} alt="wwai-logo" />
      </div>


      <div className="w-[216px] h-[432px] p-[24px] ">
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1 group ">
          <i className="ri-book-2-line w-4 h-4 text-[#9199B0] p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0] group-hover:text-black">Introduction</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1 group">
          <i className="ri-heart-pulse-line w-4 h-4 text-[#9199B0] p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0] group-hover:text-black">Healthcare</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD]  rounded-lg gap-2 p-2 mb-1 group">
          <i className="ri-car-line w-4 h-4  text-[#9199B0]  p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px]  text-[#9199B0] group-hover:text-black ">Automotive</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1 group">
          <i className="ri-handbag-line w-4 h-4  text-[#9199B0]  p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0] group-hover:text-black ">E-commerce</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1 group">
          <i className="ri-hand-coin-line w-4 h-4  text-[#9199B0]  p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0]  group-hover:text-black">Retail</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1 group">
          <i className="ri-plane-line w-4 h-4  text-[#9199B0]  p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0] group-hover:text-black ">Travel</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1 group">
          <i className="ri-money-dollar-circle-line w-4 h-4  text-[#9199B0]  p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0] group-hover:text-black ">financial</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px]  hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] not-last:rounded-lg gap-2 p-2 mb-1 group">
          <i className="ri-building-2-line w-4 h-4  text-[#9199B0]  p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0] group-hover:text-black ">Read estate</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1 group">
          <i className="ri-tools-line w-4 h-4  text-[#9199B0]  p-[10px_8px] flex items-center justify-center group-hover:text-black"></i>
          <span className="w-[176px] h-[20px] text-[#9199B0] group-hover:text-black ">Manfacturing</span>
        </div>
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
      <div className="my-4 mx-6 pl-2 bg-white hover:bg-[#E6EAFA] w-[216px] h-[52px] rounded-lg flex items-center space-x-2 text-[#0028CA]">
        <div className="bg-white rounded-full  ">
          <i className="ri-history-line "></i>
        </div>

        <div>
          <p className="text-sm font-medium">12 days left</p>
          <p className="text-xs text-[#656E8B]">Get the full version now</p>
        </div>
      </div>

      {/* User Data */}
      <div className="my-4 mx-6 pl-2 flex items-center space-x-3 hover:bg-[#E6EAFA] rounded-lg w-[216px] h-[52px] ">
        <img
          src={UserAvatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-[#20232C]">M. Hussain</p>
          <p className="text-xs text-[#9199B0]">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
