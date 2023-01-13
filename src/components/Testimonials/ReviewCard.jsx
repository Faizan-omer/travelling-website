import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className={`w-[30%] mb-10 mr-2 h-48 ${review.selected && "bg-[#43B97F] "} p-3`}>
      <div className="flex">
        <img src={review.avatar} alt="" className="w-10 h-10 basis-[8%]" />
        <p
          className={`${
            !review.selected ? "text-stone-900" : "text-white"
          } font-bold text-lg self-center basis-[70%] ml-3`}
        >
          {review.name}
        </p>
      </div>
      <p className={`mt-3 text-sm ${review.selected && "text-white"}`}>{review.review}</p>
    </div>
  );
};

export default ReviewCard;
