import React, { useState, useEffect } from "react";
import UserAvatar from "/assets/user-avatar.png"

interface SideBarProps {
  closeSidebar?: () => void;
  isOpen: boolean; // New prop to track if the sidebar is open
}

const SideBar: React.FC<SideBarProps> = ({ closeSidebar, isOpen }) => {
  // Local state to control the visibility of the hide button
  const [showHideBtn, setShowHideBtn] = useState(false);

  // Whenever the sidebar is opened again, reset the hide button to visible
  useEffect(() => {
    if (isOpen) {
      setShowHideBtn(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    // Hide the close button immediately
    setShowHideBtn(false);
    // Call the parent's closeSidebar function to hide the sidebar
    if (closeSidebar) {
      closeSidebar();
    }
  };
  return ( 
    <div className="relative h-full w-64 p-4 bg-white block  ">
      {/* Hide button (only visible when showHideBtn is true) */}
      <div className="hidden lg:block">
      {showHideBtn && closeSidebar && (
        <button
          onClick={handleClose}
          className="absolute top-4 right-[-20px] bg-blue-600 text-white p-2 rounded-r-md shadow-lg"
        >
          &lt;
        </button>
      )}
      </div>

      {/* Sidebar content */} 
      <div className="mt-10 space-y-4">
        <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded-lg">
          <span>📄</span>
          <span>Introduction</span>
        </div>
        <div className="flex items-center space-x-2 p-2">
          <span>🏥</span>
          <span>Healthcare</span>
        </div>
        <div className="flex items-center space-x-2 p-2">
          <span>🚗</span>
          <span>Automotive</span>
        </div>
        <div className="flex items-center space-x-2 p-2">
          <span>🏭</span>
          <span>Manufacturing</span>
        </div>
        <div className="flex items-center space-x-2 p-2">
          <span>✈️</span>
          <span>Travel</span>
        </div>
        <div className="flex items-center space-x-2 p-2">
          <span>🛍️</span>
          <span>Retail</span>
        </div>
        <div className="flex items-center space-x-2 p-2">
          <span>💰</span>
          <span>Financial</span>
        </div>
        <div className="flex items-center space-x-2 p-2">
          <span>🛒</span>
          <span>E-commerce</span>
        </div>
        <div className="flex items-center space-x-2 p-2">
          <span>🏢</span>
          <span>Real estate</span>
        </div>
      </div>

      {/* Rate Us section */}
      <div className="mt-6 p-2 bg-gray-100 rounded-lg flex items-center justify-between">
        <span>⭐ Rate us</span>
      </div>

      {/* Get Full Version Button */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
        Get Full version →
      </button>

      {/* Plan Information */}
      <div className="mt-6 p-3 bg-blue-50 rounded-lg flex items-center space-x-2">
        <span className="bg-blue-600 text-white rounded-full p-2">⏰</span>
        <div>
          <p className="text-sm font-medium">12 days left</p>
          <p className="text-xs text-gray-600">Get the full version now</p>
        </div>
      </div>

      {/* User Data */}
      <div className="mt-6 p-3 flex items-center space-x-3">
        <img
          src={UserAvatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">M. Hussain</p>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
