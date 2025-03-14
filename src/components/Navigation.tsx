import { Outlet } from "react-router-dom";
import logo2 from "../assets/logo2.png";
// import logo3 from "../assets/logo3.png";
import profile from "../assets/profile.png";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <nav className="dark:bg-[#1E1E1E]">
        <div>
          <div className="dark:bg-[#1E1E1E]   w-full  dark:text-white hidden md:flex  font-Inter">
            <div className="dark:bg-black fixed top-0  z-10 md:w-[880px] lg:w-[1130px] xl:w-[1380px] 2xl:w-[1640px] left-5 bg-white mt-5 mx-11 w-full rounded-lg shadow inset-shadow-2xs border border-[#646cffaa] hover:shadow-xl shadow-[#646cffaa] hover:shadow-[#646cffaa] pl-3 pr-10 py-1  flex justify-between items-center">
              <div className=" items-center gap-5 md:hidden lg:flex">
                <img
                  src={logo2}
                  alt="logo"
                  className="w-[150px] h-[90px] hover:scale-[1.2] "
                />
                <span className="text-[20px]  hover:scale-[1.2] hover:font-extrabold">
                  RMS
                </span>
              </div>

              <div className="flex gap-6 font-bold text-[20px] md:gap-10 md:text-[25px]">
                <span className=" hover:scale-[1.2] hover:font-extrabold">
                  Home
                </span>
                <span className="hover:scale-[1.2] hover:font-extrabold">
                  About
                </span>
                <span className="hover:scale-[1.2] hover:font-extrabold">
                  Contact us
                </span>
              </div>

              <div className="flex gap-7">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-md hover:scale-[1.2] bg-white dark:bg-black"
                >
                  {theme === "dark" ? (
                    <Sun className="w-9 h-9 text-yellow-400" />
                  ) : (
                    <Moon className="w-9 h-9 text-gray-900" />
                  )}
                </button>
                <span className="text-black  flex items-center justify-center text-[50px] font-bold">
                  <img
                    src={profile}
                    alt="logo2"
                    className="rounded-[50%] w-[80px] h-[80px]"
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            className="relative md:hidden"
            onClick={() => setActive(!active)}
          >
            <div className="absolute top-3 right-3 z-10">
              <MenuIcon className="text-black dark:text-white w-20 h-20" />
            </div>
          </div>

          <div className={`relative md:hidden  ${active ? "block" : "w-0"} `}>
            <div className="absolute top-0 right-0 bg-[#646cffaa] dark:bg-black h-screen w-[300px]  flex flex-col justify-center items-center gap-7 text-[30px] font-bold">
              <div>Home</div>
              <div>About</div>
              <div>contact us</div>
              <div>sign up</div>
              <div>sign out</div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
