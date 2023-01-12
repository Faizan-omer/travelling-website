import React from "react";

const ContactUsForm = () => {
  return (
    <>
      <form action="" className="mt-3 w-full">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="border border-black border-gray-400 rounded w-3/4 h-9 p-3 mt-2"
            placeholder="Input your name"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            className="border border-black border-gray-400 rounded w-3/4 h-9 p-3 mt-2"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="name">Message:</label>
          <textarea
            type="text"
            id="name"
            className="border border-black border-gray-400 rounded w-3/4 h-32 p-3 mt-2"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-green-400 mt-3 w-24 h-10 text-white"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactUsForm;
