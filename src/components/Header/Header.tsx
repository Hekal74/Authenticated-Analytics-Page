import { useState } from 'react';
// import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="header">
            <div className="flex items-center justify-between p-4 ">

                <img className="w-44 h-8 pl-1" src="/src/assets/wwai-logo.png" alt="wwai-logo" />

                {/*  for mobile */}
                <button className="flex flex-col space-y-2 cursor-pointer lg:hidden" onClick={toggleMenu}>
                    <span className="block w-6 h-0.5 bg-black rounded-md"></span>
                    <span className="block w-6 h-0.5 bg-black rounded-md"></span>
                    <span className="block w-6 h-0.5 bg-black rounded-md"></span>
                </button>

                {/*  for Desktop */}
                <div className="hidden lg:flex space-x-4">
                    <button className=" text-black px-4 py-2 rounded-md border-b-gray-400 shadow-black">
                        
                        Rate Us <span>⭐</span></button> 
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-md border-blue-300 shadow-sm">Get Full Version</button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 right-0 w-2xs bg-white shadow-lg z-10">
                    {/* <div className="flex flex-col p-4 space-y-2">
                        <Link to="introduction" className="text-gray-700">Introduction</Link>
                        <Link to="healthcare" className="text-gray-700">Healthcare</Link>
                        <Link to="realestate" className="text-gray-700">Real Estate</Link>
                    </div> */}
                    <SideBar isOpen={true} closeSidebar={() => false} />
                </div>
            )}
            <hr className="border-t border-gray-300 shadow-sm" />
        </div>
    );
};

export default Header;
