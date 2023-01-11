import React from "react";
import Contact from "./Contact";
import Description from "./Description";
import Links from "./Links";
import Services from "./Services";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="w-full text-white text-sm bg-[#295943] py-7 px-10">
      <div className="flex justify-between">
        <Description />
        <Links />
        <Services />
        <Contact />
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-white font-bold text-lg">Faizan Omer</p>
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
