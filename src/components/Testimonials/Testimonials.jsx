import React from "react";
import ReviewCard from "./ReviewCard";
const Testimonials = ({ reviews }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-[#295943] text-xs">Testimonials</p>
      <p className="text-stone-900 font-bold text-lg">What they say about us</p>
      <div className="flex flex-wrap justify-center items-center mt-10 w-[80%]">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
