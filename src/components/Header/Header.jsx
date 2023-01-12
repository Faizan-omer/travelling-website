import React from "react";
import Navbar from "./Navbar";
import "./header.css";
import { useLocation } from "react-router-dom";
import { CONTACT_US, HOME, NEWS } from "../../constants/routes";
const Header = () => {
  let location = useLocation();
  return (
    <div
      className={`w-full ${
        location.pathname === HOME ? "h-full bg-img bg-cover bg-center" : ""
      }`}
    >
      <Navbar pathname={location.pathname} />
      {location.pathname === CONTACT_US ? (
        <div className="bg-img-contact bg-cover bg-center h-64 flex flex-col justify-end">
          <h2 className="text-white text-4xl font-bold mb-8 ml-8">Contact Us</h2>
        </div>
      ) : location.pathname === NEWS ? (
        <div className="bg-img-news bg-cover bg-center h-64 flex flex-col justify-end">
          <h2 className="text-white text-4xl font-bold mb-8 ml-8">Our News</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
