import React from "react";

const ImageCard = ({ image }) => {
  console.log("-----------<>", image);
  return (
    <img
      src={image.largeImageURL}
      alt=""
      className="w-3/12 max-h-52 object-fit-cover rounded-md mr-3 mt-2"
    />
  );
};

export default ImageCard;
