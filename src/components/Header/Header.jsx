import React from "react";
import Navbar from "./Navbar";
import "./header.css";
import { useLocation } from "react-router-dom";
import { CONTACT_US, DISCOVER, HOME, NEWS } from "../../constants/routes";
import { SearchBar } from "../SearchBar";
const Header = () => {
  let location = useLocation();
  return (
    <div
      className={`w-full ${
        location.pathname === HOME ? "h-3/4 bg-img bg-cover bg-center" : ""
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
      ) : location.pathname === DISCOVER ? (
        <div className="bg-img-discover bg-cover bg-center h-64 flex flex-col justify-end">
          <h2 className="text-white text-4xl font-bold mb-8 ml-8">Discover</h2>
        </div>
      ) : null}
      {location.pathname === HOME && (
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-3xl text-white font-medium">
            Explore the world with a smile
          </p>
          <p className="text-xl text-white">Your journey begins with us!</p>
          <div className="mt-8" />
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default Header;
