import React from "react";

const ImageCard = ({ image }) => {
  console.log("URL : ", image);
  return <img src={image.largeImageURL} alt="" className="w-20 h-20 object-fit-cover" />;
};

export default ImageCard;
