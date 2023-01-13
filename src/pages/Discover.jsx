import React from "react";
import Testimonials from "../components/Testimonials/Testimonials";
import AppLayout from "../layouts/AppLayout";
import discoverPng from "../assets/images/discover.png";
import avatar1 from "../assets/avatar/1.png";
import avatar2 from "../assets/avatar/2.png";
import avatar3 from "../assets/avatar/3.png";
import avatar4 from "../assets/avatar/4.png";
import avatar5 from "../assets/avatar/5.png";
import avatar6 from "../assets/avatar/6.png";

const Discover = () => {
  const reviews = [
    {
      name: "Angelina Simple",
      id: 1,
      review:
        "This app made my vacation planning so much easier! I was able to book flights, hotels and rental cars all in one place. Highly recommend!",
      avatar: avatar1,
    },
    {
      name: "Jane Smith",
      id: 2,
      review:
        "The travel app was a lifesaver! It had all the information I needed to plan my trip, from flight schedules to local activities. I'll definitely be using it again.",
      avatar: avatar2,
      selected: true,
    },
    {
      name: "Bob Johnson",
      id: 3,
      review:
        "I had a great experience using this app for my last business trip. It made booking everything so easy and convenient.",
      avatar: avatar3,
    },
    {
      name: "Angii Nani",
      id: 4,
      review:
        "The travel app has a wide range of options for accommodation and transportation. I was able to find great deals and discounts.",
      avatar: avatar4,
    },
    {
      name: "Graham Suryo J",
      id: 5,
      review:
        "I love how user-friendly this app is. It's very easy to navigate and find the information I need.",
      avatar: avatar5,
    },
    {
      name: "Baga G Natfi",
      id: 6,
      review:
        "This app has changed the way I travel. I can plan and book everything I need in one place, and also keep track of my itinerary. It's a must-have for anyone who travels frequently.",
      avatar: avatar6,
    },
  ];
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
      <Testimonials reviews={reviews} />
    </AppLayout>
  );
};

export default Discover;
