import React from "react";
import ImageCard from "../components/Shared/ImageCard";
import Tabs from "../components/Shared/Tabs";
import AppLayout from "../layouts/AppLayout";

const News = () => {
  const [selectedTab, setSelectedTab] = React.useState({
    id: 1,
    title: "adventure travel",
  });
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    fetch(
      process.env.REACT_APP_PIXABAY_URL +
        "&q=" +
        encodeURIComponent(selectedTab ? selectedTab.title : "adventure travel") +
        "&per_page=12",
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
      })
      .catch((err) => console.error(err));
  }, [selectedTab]);

  const tabs = [
    { id: 1, title: "adventure travel" },
    { id: 2, title: "beach" },
    { id: 3, title: "explore world" },
    { id: 4, title: "family holidays" },
  ];
  return (
    <div className=" h-full w-full">
      <AppLayout>
        <>
          <div className="flex justify-center py-8 ">
            <div className="flex flex-col">
              <p className="self-center font-bold text-xl text-stone-900">
                Traveliner Archives
              </p>
              <p className="text-lg">Some images from our visits around the world</p>
            </div>
          </div>
          <div className="mt-3 mb-10 flex justify-center">
            <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>
          <div className="flex flex-wrap justify-center mb-12">
            {images?.length > 0 ? (
              images.map((image) => <ImageCard image={image} key={image.id} />)
            ) : (
              <p>No results found !</p>
            )}
          </div>
        </>
      </AppLayout>
    </div>
  );
};

export default News;
