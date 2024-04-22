import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div >
      <h2>{restaurant.name}</h2>
      <p>Cuisines: {restaurant.cuisines.join(', ')}</p>
      <p>Rating: {restaurant.rating}</p>
      <p>Address: {restaurant.address}</p>
    </div>
  );
};

export default RestaurantCard;
