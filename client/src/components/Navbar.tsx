import React, { useState, useEffect, useRef } from "react";
import useAuth from "../util/Auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuth = await useAuth();
      console.log(isAuth);
      setIsAuthenticated(isAuth);
    };
    checkAuthentication();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto bg-white border-b-0 2xl:max-w-7xl">
      <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg tracking-tight text-black focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <span className="lg:text focus:ring-0">FinVisor</span>
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={isOpen ? "hidden" : "inline-flex"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                className={isOpen ? "inline-flex" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:items-center md:flex-row md:justify-center md:flex-1 md:pb-0`}
        >
          <a
            href="/about"
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto"
          >
            About
          </a>
          <a
            href="/popular-articles"
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
          >
            Popular articles
          </a>
          {isAuthenticated ? (
            <a
              href="/dashboard"
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
            >
              Dashboard
            </a>
          ) : null}
          <div className="hidden md:inline-flex items-center gap-2 list-none lg:ml-auto">
            {isAuthenticated ? (
              <div ref={dropdownRef} className="relative">
                <img
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg"
                  width="36"
                  height="36"
                  alt="profile"
                  className="rounded-full cursor-pointer"
                  onClick={toggleDropdown}
                />
                {showDropdown && (
                  <div className="absolute z-10 max-w-xs px-1 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                    {/* Dropdown content */}
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 px-2 py-2 bg-white sm:p-4">
                        <a
                          href="/changepassword"
                          className="inline-flex items-start p-2 -m-2 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div className=""></div>
                          <div className="ml-2">
                            <p className="text-sm text-black">
                              Change password
                            </p>
                          </div>
                        </a>
                        {/* Add more dropdown items here */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a href="/signin">
                <button className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                  Sign in
                </button>
              </a>
            )}
            {isAuthenticated ? (
              <a href="/">
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black"
                >
                  Log out
                </button>
              </a>
            ) : (
              <a href="/signup">
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
                  Sign up
                </button>
              </a>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
