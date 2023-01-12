import React from "react";
import Tabs from "../components/Shared/Tabs";
import AppLayout from "../layouts/AppLayout";

const News = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);

  const tabs = [
    { id: 1, title: "adventure travel" },
    { id: 2, title: "beach" },
    { id: 3, title: "explore world" },
    { id: 4, title: "art and culture" },
    { id: 5, title: "family holidays" },
  ];
  return (
    <div className=" h-full w-full">
      <AppLayout>
        <>
          <div className="flex justify-center py-8">
            <div className="flex flex-col">
              <p className="self-center font-bold text-xl text-stone-900">
                Traveli Archives
              </p>
              <p className="text-lg">Some images from our visits around the world</p>
            </div>
          </div>
          <div className="mt-3 mb-10 flex justify-center">
            <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>
        </>
      </AppLayout>
    </div>
  );
};

export default News;
