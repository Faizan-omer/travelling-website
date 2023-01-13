import React from "react";
import Testimonials from "../components/Testimonials/Testimonials";
import AppLayout from "../layouts/AppLayout";
import discoverPng from "../assets/images/discover.png";

const Discover = () => {
  return (
    <AppLayout>
      <div className="flex px-4 justify-between mt-20 mb-20">
        <div className="flex flex-col flex-1">
          <img src={discoverPng} alt="" className="w-4/5 h-auto" />
        </div>
        <div className="flex flex-col flex-1 ml-4">
          <p className="font-bold text-[#295943] text-xs">Travellers Point</p>
          <p className="text-stone-900 font-bold text-lg">
            We help to find your dream place
          </p>
          <p className="text-sm leading-loose">
            We understand that planning a trip can be a daunting and overwhelming task,
            which is why we are dedicated to making the process as easy and stress-free as
            possible. Whether you're looking for a romantic getaway, a family vacation, or
            an adventure of a lifetime, we have the knowledge, resources, and expertise to
            guide you through every step of the process. From researching destinations to
            booking accommodations, we are here to help you find your dream travel
            location.
          </p>
          <div className="flex justify-between mt-4 h-20">
            <div className="flex flex-col flex-1">
              <p className="font-extrabold text-lg text-[#295943]">100+</p>
              <p className="mt-1 text-stone-900 text-sm">Holiday Package</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="font-extrabold text-lg text-[#295943]">172</p>
              <p className="mt-1 text-stone-900 text-sm">Hotels</p>
            </div>
          </div>
          <div className="flex justify-between  h-20">
            <div className="flex flex-col flex-1">
              <p className="font-extrabold text-lg text-[#295943]">68</p>
              <p className="mt-1 text-stone-900 text-sm">Elite Transportation</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="font-extrabold text-lg text-[#295943]">32M+</p>
              <p className="mt-1 text-stone-900 text-sm">
                We help to find your dream place
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </AppLayout>
  );
};

export default Discover;
