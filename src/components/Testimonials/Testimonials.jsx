import React from "react";
import ReviewCard from "./ReviewCard";
import avatar1 from "../../assets/avatar/1.png";
import avatar2 from "../../assets/avatar/2.png";
import avatar3 from "../../assets/avatar/3.png";
import avatar4 from "../../assets/avatar/4.png";
import avatar5 from "../../assets/avatar/5.png";
import avatar6 from "../../assets/avatar/6.png";

const Testimonials = () => {
  const reviews = [
    {
      name: "Angelina Simple",
      id: 1,
      review: "Great product, highly recommend!",
      avatar: avatar1,
    },
    {
      name: "Jane Smith",
      id: 2,
      review: "Good product, but could be better.",
      avatar: avatar2,
      selected: true,
    },
    {
      name: "Bob Johnson",
      id: 3,
      review: "Fantastic product, exceeded expectations!",
      avatar: avatar3,
    },
    {
      name: "Angii Nani",
      id: 4,
      review: "Fantastic product, exceeded expectations!",
      avatar: avatar4,
    },
    {
      name: "Graham Suryo J",
      id: 5,
      review: "Fantastic product, exceeded expectations!",
      avatar: avatar5,
    },
    {
      name: "Baga G Natfi",
      id: 6,
      review: "Fantastic product, exceeded expectations!",
      avatar: avatar6,
    },
  ];
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
