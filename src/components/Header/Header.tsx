import { useState } from 'react';
// import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import "remixicon/fonts/remixicon.css";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="header fixed top-0 right-0 left-0 z-50  lg:ml-[264px] h-[64px] border-b-[1px] border-[#DEE1E7] bg-white  ">
            {/* <div className=" fixed top-0 lg:left-0 z-50   w-full bg-white "> */}
            <div className="flex font-semibold  justify-between items-center px-6 text-[#20232C]  h-full ">

                Introduction


                {/*  for mobile */}
                
                <button className="flex items-center  cursor-pointer lg:hidden" onClick={toggleMenu}>
                    <i className='ri-menu-fill text-[#656E8B] w-[18px] h-4 flex items-center justify-center  '></i>
                </button>

                {/*  for Desktop */}
                <div className="hidden lg:flex space-x-4 h-[40px] w-[255px]">
                    <div className=''>
                        <button className=" text-[#20232C] rounded-lg  text-sm font-medium w-[96px] h-[40px] border-[1px] border-[#DEE1E7] hover:bg-[#F3F4F6] hover:border-[#C1C5D2] ">
                            Rate Us
                            <i className='ri-star-fill text-[#FDB02B] ml-1 w-5 h-5 '></i>
                        </button>
                    </div>
                    <div className=''>
                        <button className="bg-[#0028CA] hover:bg-[#001C8F] text-white font-semibold rounded-lg  text-sm  w-[151px]  h-[40px] px-[12px] py-[10px]  ">
                            Get Full Version
                            <i className='ri-arrow-right-s-line ml-1 w-5 h-5 '></i>
                            </button>  
                    </div> 
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 right-0 w-2xs bg-white  z-10">
                    {/* <div className="flex flex-col p-4 space-y-2">
                        <Link to="introduction" className="text-gray-700">Introduction</Link>
                        <Link to="healthcare" className="text-gray-700">Healthcare</Link>
                        <Link to="realestate" className="text-gray-700">Real Estate</Link>
                    </div> */}
                    <SideBar isOpen={true} closeSidebar={() => false} />
                </div>
            )}
            <hr className="border-t border-gray-300 " />
        </div>
    );
};

export default Header;
