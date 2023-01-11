import React from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../constants/navbar.links";

const Navbar = ({ renderBg }) => {
  return (
    <div className={`flex w-full ${renderBg ? "text-white" : "text-black"}`}>
      <div className="flex justify-start w-full">
        <p
          className={`text-xl ${renderBg ? "text-slate-200" : "text-lime-900"} font-bold`}
        >
          Travely
        </p>
      </div>
      <div className="flex justify-center w-full">
        {navbarLinks.map((link) => (
          <p
            className="text-sm mx-6 whitespace-nowrap 
            hover:cursor-pointer hover:font-bold hover:underline 
            hover:underline-offset-4"
            key={link.key}
          >
            <Link to={link.path}>{link.title}</Link>
          </p>
        ))}
      </div>
      <div className="flex justify-end w-full">
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
