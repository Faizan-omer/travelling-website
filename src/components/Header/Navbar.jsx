import React from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../constants/navbar.links";
import { HOME } from "../../constants/routes";

const Navbar = ({ pathname }) => {
  return (
    <div
      className={`flex w-full ${
        pathname === HOME ? "text-white" : "text-black"
      } px-2 py-2`}
    >
      <div className="flex justify-start w-full">
        <p
          className={`text-xl ${
            pathname === HOME ? "text-slate-200" : "text-[#43B97F]"
          } font-mono font-bold`}
        >
          Traveliner
        </p>
      </div>
      <div className="flex justify-center w-full">
        {navbarLinks.map((link) => (
          <p
            className={`${
              link.path === pathname && pathname !== HOME
                ? " text-[#43B97F] font-bold"
                : " hover:font-bold hover:underline hover:underline-offset-4 "
            }
            text-sm mx-6 whitespace-nowrap 
            hover:cursor-pointer `}
            key={link.key}
          >
            <Link to={link.path}>{link.title}</Link>
          </p>
        ))}
      </div>
      <div className={`flex justify-end w-full ${pathname !== HOME && "text-[#43B97F]"}`}>
        <p>2023</p>
      </div>
    </div>
  );
};

export default Navbar;
