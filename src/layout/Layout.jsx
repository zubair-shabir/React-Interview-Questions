import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ThemeContext from "../ThemeContext/ThemeContext";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const Layout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${theme === "dark" ? "darkTheme" : "LightTheme"} h-full `}
      >
        <div
          className={`fixed top-5 right-5 z-10  text-4xl   rounded-full  p-3 cursor-pointer ${
            theme === "dark" ? "lightButton" : "darkButton"
          }`}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FaSun /> : <IoMoon />}
        </div>
        <Link to="/">
          <span
            className={`fixed bottom-3 right-3 text-4xl rounded-full  p-3 cursor-pointer ${
              theme === "dark" ? "lightButton" : "darkButton"
            }`}
          >
            <IoMdHome />
          </span>
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
