import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import { socialIcons } from "../constants/index";
import { close, menu } from "../assets/index";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="sm:px-16 px-6  w-full hidden lg:flex   items-center  mx-auto z-100  rounded-lg  h-14 static">
        <div className="w-full  md:flex justify-between items-center mx-auto text-textColorWhite dark:text-textColor">
          <Link
            to="/"
            className="flex items-center gap-2 logo"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="font-grenze text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-400 to-blue-600 text-transparent bg-clip-text">
              AR
            </p>
          </Link>
          <div className="flex items-center gap-4">
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setActive(link.title);
                    }}
                    className={`${
                      active === link.title
                        ? "text-textHover"
                        : "text-textColorWhite dark:text-textColor"
                    } hover:text-textHover text-[16px] font-medium cursor-pointer`}
                  >
                    {index == 2 ? (
                      <button className="bg-buttonBgWhite hover:bg-buttonBgWhiteHover dark:bg-buttonBg dark:hover:bg-buttonHover  rounded-3xl px-4 py-1">
                        <a href={`#${link.id}`}>{link.title}</a>
                      </button>
                    ) : (
                      <a href={`#${link.id}`}>{link.title}</a>
                    )}
                  </li>
                );
              })}
            </ul>
            <Divider orientation="vertical" flexItem color="#414853" />
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <DarkModeIcon className="text-backgroundWhite " />
              ) : (
                <LightModeIcon className="text-buttonBg" />
              )}
            </button>
            <Divider orientation="vertical" flexItem color="#414853" />
            {socialIcons.map((icon, index) => {
              return (
                <a href={icon.url} key={index}>
                  <img
                    src={icon.link}
                    alt={icon.altText}
                    className={
                      index === 2 ? `w-[55px] relative right-3` : `w-[30px]`
                    }
                  />
                </a>
              );
            })}
          </div>
        </div>
      </nav>
      <nav className="lg:hidden flex flex-1 justify-between items-center mx-10 text-textColor">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="font-grenze text-5xl font-bold logo bg-gradient-to-r from-purple-600 via-blue-400 to-blue-600 text-transparent bg-clip-text">
            AR
          </p>
        </Link>
        <div className="flex gap-8 justify-center items-center">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <DarkModeIcon className="text-backgroundWhite " />
            ) : (
              <LightModeIcon className="text-buttonBg" />
            )}
          </button>
          <Divider orientation="vertical" flexItem color="#414853" />
          <img
            src={toggle ? close : menu}
            alt="menu"
            className= {` ${darkMode ? "text-backgroundWhite" : "text-buttonBg"} w-12 h-12  font-bold  cursor-pointer`}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
      </nav>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        }  mx-10 mt-6 justify-center lg:hidden`}
      >
        <ul className="list-none flex flex-col items-center gap-5">
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
                className={`${
                  active === link.title
                    ? "text-textHover"
                    : " dark:text-textColor text-textColorWhite"
                } hover:text-textHover text-[18px] font-medium cursor-pointer`}
              >
                {index == 2 ? (
                  <button className="bg-buttonBgWhite hover:bg-buttonBgWhiteHover dark:bg-buttonBg dark:hover:bg-buttonHover  rounded-3xl px-4 py-1">
                    <a href={`#${link.id}`}>{link.title}</a>
                  </button>
                ) : (
                  <a href={`#${link.id}`}>{link.title}</a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
