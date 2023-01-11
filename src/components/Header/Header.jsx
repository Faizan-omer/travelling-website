import React from "react";
import Navbar from "./Navbar";
import "./header.css";

const Header = ({ renderBg }) => {
  return (
    <div
      className={`w-full h-full px-2 py-2 ${renderBg ? "bg-img bg-cover bg-center" : ""}`}
    >
      <Navbar renderBg={renderBg} />
    </div>
  );
};

export default Header;
