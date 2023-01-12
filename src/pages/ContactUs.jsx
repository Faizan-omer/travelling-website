import React from "react";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import AppLayout from "../layouts/AppLayout";
import mapImage from "../assets/contactus/map.png";

const ContactUs = () => {
  return (
    <div className="h-full w-full">
      <AppLayout>
        <div className="flex jusitfy-between px-6 py-8">
          <div className="flex flex-col flex-1">
            <p className="font-bold text-xl text-stone-900">Get in touch</p>
            <p className="mt-5">
              You can use the form below to reach me out to my email. I'll be happy to
              oblige with any web dev requests
            </p>
            <ContactUsForm />
          </div>
          <div className="flex flex-col flex-1">
            <img src={mapImage} alt="" className="h-3/4 object-fit-cover" />
            <div className="flex flex-col mt-2">
              <p>
                <span className="font-bold">City:</span>
                <span className="ml-4">Karachi</span>
              </p>
              <p>
                <span className="font-bold">Email:</span>
                <span className="ml-4">omerfaizan1@gmail.com</span>
              </p>
              <p>
                <span className="font-bold">Phone:</span>
                <span className="ml-4">+923324598684</span>
              </p>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default ContactUs;
