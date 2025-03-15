import { Outlet, Link, useLocation } from "react-router-dom"; // Import useLocation
import logo2 from "../assets/logo2.png";
import profile from "../assets/profile.png";
import { useEffect, useState } from "react";
import { Moon, Sun, X } from "lucide-react";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation(); // Get the current location

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="dark:bg-[#1E1E1E]">
        <div>
          {/* Desktop Navigation */}
          <div className="dark:bg-[#1E1E1E] w-full dark:text-white hidden md:flex font-Inter">
            <div className="dark:bg-black top-0 z-50 md:w-[880px] lg:w-[1130px] xl:w-[1380px] 2xl:w-[1640px] left-5 bg-white mt-5 mx-11 w-full rounded-lg shadow inset-shadow-2xs border border-[#646cffaa] hover:shadow-xl shadow-[#646cffaa] hover:shadow-[#646cffaa] pl-3 pr-10 py-1 flex justify-between items-center">
              <div className="items-center gap-5 md:hidden lg:flex">
                <img
                  src={logo2}
                  alt="logo"
                  className="w-[150px] h-[90px] hover:scale-[1.2]"
                />
                <span className="text-[20px] hover:scale-[1.2] hover:font-extrabold">
                  RMS
                </span>
              </div>

              <div className="flex gap-6 font-bold text-[20px] md:gap-10 md:text-[25px]">
                <Link
                  to="/"
                  className={`hover:scale-[1.2] hover:font-extrabold ${
                    isActive("/") ? "text-[#646cff] font-extrabold" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`hover:scale-[1.2] hover:font-extrabold ${
                    isActive("/about") ? "text-[#646cff] font-extrabold" : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`hover:scale-[1.2] hover:font-extrabold ${
                    isActive("/contact") ? "text-[#646cff] font-extrabold" : ""
                  }`}
                >
                  Contact us
                </Link>
              </div>

              <div className="flex gap-7">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md hover:scale-[1.2] bg-white dark:bg-black"
                >
                  {theme === "dark" ? (
                    <Sun className="w-9 h-9 text-yellow-400" />
                  ) : (
                    <Moon className="w-9 h-9 text-gray-900" />
                  )}
                </button>
                <span className="text-black flex items-center justify-center text-[50px] font-bold">
                  <img
                    src={profile}
                    alt="profile"
                    className="rounded-[50%] w-[80px] h-[80px]"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="relative md:hidden" onClick={toggleMenu}>
            <div className="absolute top-3 right-3 z-10">
              <MenuIcon className="text-black dark:text-white w-20 h-20" />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
              isMenuActive ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeMenu}
            ></div>

            {/* Menu Content */}
            <div className="fixed top-0 right-0 h-screen w-[300px] bg-white dark:bg-[#1E1E1E] flex flex-col justify-start items-center gap-7 text-[30px] font-bold p-5">
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="self-end p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-8 h-8 text-black dark:text-white" />
              </button>

              {/* Menu Items */}
              <Link
                to="/"
                className={`text-black dark:text-white hover:scale-[1.2] hover:font-extrabold transition-transform ${
                  isActive("/") ? "text-[#646cff] font-extrabold" : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-black dark:text-white hover:scale-[1.2] hover:font-extrabold transition-transform ${
                  isActive("/about") ? "text-[#646cff] font-extrabold" : ""
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-black dark:text-white hover:scale-[1.2] hover:font-extrabold transition-transform ${
                  isActive("/contact") ? "text-[#646cff] font-extrabold" : ""
                }`}
                onClick={closeMenu}
              >
                Contact us
              </Link>
              <div className="text-black dark:text-white hover:scale-[1.2] hover:font-extrabold transition-transform">
                Sign up
              </div>
              <div className="text-black dark:text-white hover:scale-[1.2] hover:font-extrabold transition-transform">
                Sign out
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
