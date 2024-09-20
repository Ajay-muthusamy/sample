import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { IoLogOutSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar
  const navigate = useNavigate();

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside>
      <div className="flex">
        {/* Hamburger Button for mobile */}
        <div className="md:hidden p-4">
          <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
            <GiHamburgerMenu className="text-3xl text-[#5D4E8F]" />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:w-52 bg-[#5D4E8F] p-2 w-52 transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col justify-between h-screen font-mono text-white">
            <div className="flex flex-col">
              <button
                className="p-5 text-2xl hover:bg-[#7e5fe4] hover:rounded-lg transition-colors duration-300"
                aria-label="Navigate to Orders"
                onClick={() => navigate("/")}
              >
                Orders
              </button>

              <button
                className="p-5 text-2xl hover:bg-[#7e5fe4] hover:rounded-lg transition-colors duration-300"
                aria-label="Update section"
                onClick={() => navigate("/page-updates")}
              >
                Update
              </button>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-center text-white font-mono flex items-center space-x-2">
                Logout <IoLogOutSharp className="text-2xl" />
              </h1>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
