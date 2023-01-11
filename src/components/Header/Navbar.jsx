import React from "react";
import { NAVBAR_LINKS } from "../../constants/navbar.links";

const Navbar = () => {
  return (
    <div className="flex w-full">
      <div className="flex justify-start w-full">
        <p className="text-xl text-slate-200 font-bold">Travely</p>
      </div>
      <div className="flex justify-center w-full">
        {NAVBAR_LINKS.map((link) => (
          <p className="text-sm text-white px-2" key={link}>
            {link}
          </p>
        ))}
      </div>
      <div className="flex justify-end w-full">
        <p className="text-white">Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
