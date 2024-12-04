import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { FaChevronDown } from "react-icons/fa"; // For the dropdown arrow

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Main Nav Links (Already displayed in the navbar)
  const NavLinks = [
    { title: "Home", path: "/" },
    { title: "What We Do?", path: "/aboutus" },
    { title: "Our Products", path: "/products" },
    { title: "Login", path: "/login" },
  ];

  // Dropdown-specific links
  const DropdownLinks = [
    { title: "StratoFirst", path: "/s1" },
    { title: "StratoMid", path: "/s2" },
    { title: "StratoNext", path: "/s3" },
    { title: "Stratosphere", path: "/s4" },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="fixed top-0 left-0 w-full h-[13vh] flex flex-row justify-center items-center shadow-lg bg-green z-50 backdrop-blur-3xl border-b border-white/10 rounded-xl">
      <div className="flex flex-row justify-center items-center h-full w-[95%]">
        {/* Logo section */}
        <div className="flex flex-row items-center w-1/2 h-full justify-start pt-[5vh] gap-4">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/stra-4.png?updatedAt=1733226720319"
              alt="Strato logo"
              className="object-contain w-[300px] h-[auto]"
            />
          </NavLink>
        </div>

        {/* Right section with other links and Menu dropdown */}
        <div className="w-1/2 h-full font-thin flex flex-row justify-end items-center gap-8">
          <ul className="flex flex-row gap-8">
            {NavLinks.map((link, index) => (
              <li key={index} className="list-none">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-primary ${isActive ? "text-primary font-bold" : ""}`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Menu Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              <span>Menu</span>
              <FaChevronDown />
            </button>

            {/* Dropdown Content */}
            {dropdownOpen && (
              <div
                className="absolute left-0 top-full mt-2 bg-gray-300 bg-opacity-90 shadow-lg rounded-lg w-48"
              >
                <ul className="py-2">
                  {DropdownLinks.map((link, index) => (
                    <li key={index} className="px-4 py-2">
                      <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
