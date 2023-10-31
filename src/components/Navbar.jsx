import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import { close, menu } from "../assets/index";
import { Button } from "@mui/material";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="sm:px-16 px-6  w-[600px] hidden lg:flex   items-center  mx-auto z-100 bg-pentanary rounded-lg  h-14 static">
        <div className="w-full  md:flex justify-between items-center mx-auto text-primary">
          <Link
            to="/"
            className="flex items-center gap-2 logo"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="font-custom text-5xl font-bold">AR</p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setActive(link.title);
                  }}
                  className={`${
                    active === link.title ? "text-tertiary" : "text-primary"
                  } hover:text-tertiary text-[16px] font-medium cursor-pointer`}
                >
                  {index == 2 ? (
                    <Button variant="outlined" sx={{color:'#53C1DE' , border: '1px solid #413543'}} size="small">
                     <a href={`#${link.id}`}>{link.title}</a>
                    </Button>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <nav className="lg:hidden flex flex-1 justify-between items-center mx-10">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="font-custom text-5xl font-bold logo">AR</p>
        </Link>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-12 h-12  font-bold  cursor-pointer  "
          onClick={() => {
            setToggle(!toggle);
          }}
        />
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
                  active === link.title ? "text-tertiary" : "text-primary"
                } hover:text-tertiary text-[18px] font-medium cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
