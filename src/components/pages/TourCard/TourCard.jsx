/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./TourCard.css";
const TourCard = ({ dn }) => {
  return (
    <div className="h-[416px] ">
      <figure className="relative my-image   max-w-full w-72">
        <img
          className="w-full object-fill rounded-3xl border-yellow-500 border-2  h-[350px] "
          src={dn?.image}
          alt=""
        />
        <h1 className="absolute header-text text-4xl font-semibold z-30 bottom-5 left-10">
          {dn?.name}
        </h1>
      </figure>
    </div>
  );
};

export default TourCard;
