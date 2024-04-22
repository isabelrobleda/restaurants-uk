import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="border rounded-md mb-5 py-8 px-8 hover:bg-orange-100 hover:border-orange-100">
      <h2 className="font-semibold mb-1">{restaurant.name}</h2>
      <div className="flex flex-row flex-wrap">
        {restaurant.cuisines.map((cuisine, index) => (
          <span
            key={index}
            className="bg-orange-300 text-white rounded-full px-3 py-1 text-sm mr-1 my-1"
          >
            {cuisine}
          </span>
        ))}
      </div>
      <p className="text-sm mt-1"><b>Rating:</b> {restaurant.rating}</p>
      <p className="text-sm">
        <b>Address:</b> {restaurant.address}
      </p>
    </div>
  );
};

export default RestaurantCard;
