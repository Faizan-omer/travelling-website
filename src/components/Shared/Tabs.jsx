import React from "react";

const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {
  return tabs.map((tab) => (
    <div
      className={`ml-20 hover:cursor-pointer ${
        selectedTab === tab.id
          ? "bg-[#43B97F] text-white p-3 rounded-md"
          : "text-stone-900"
      }`}
    >
      <p className="font-bold capitalize">{tab.title}</p>
    </div>
  ));
};

export default Tabs;
