import React from "react";
import facebookLogo from "../../assets/logos/facebook.png";
import instagramLogo from "../../assets/logos/instagram.png";
import twitterLogo from "../../assets/logos/twitter.png";
import githubLogo from "../../assets/logos/github.png";

const Socials = () => {
  return (
    <div className="flex mt-1">
      <img src={facebookLogo} alt="" className="h-5 w-5 mr-2" />
      <img src={instagramLogo} alt="" className="h-5 w-5 mr-2" />
      <img src={twitterLogo} alt="" className="h-5 w-5 mr-2" />
      <a href="https://github.com/Faizan-omer" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="" className="h-5 w-5" />
      </a>
    </div>
  );
};

export default Socials;
