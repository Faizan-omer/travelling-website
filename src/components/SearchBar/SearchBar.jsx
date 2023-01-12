import React from "react";
import locationPng from "../../assets/images/location.png";
import searchPng from "../../assets/images/search.png";

const SearchBar = () => {
  return (
    <div className="w-2/4 h-14 rounded-md bg-white px-4 flex flex-col justify-center text-sm shadow-md">
      <div className="flex">
        <div className="basis-1/12 flex items-center">
          <img src={locationPng} alt="" />
        </div>
        <div className="basis-[30%] flex items-center">
          <p>City or Destination</p>
        </div>
        <div className="basis-3/12 border-r border-l border-slate-800 flex items-center">
          <p className="ml-2">Date of stay</p>
        </div>
        <div className="basis-[20%] flex items-center">
          <p className="ml-2">Person</p>
        </div>
        <div className="basis-[24%] bg-[#43B97F] h-8 rounded-md text-white px-2 items-center">
          <div className="flex justify-between items-center h-full">
            <p>Find trip now</p> <img src={searchPng} alt="" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
