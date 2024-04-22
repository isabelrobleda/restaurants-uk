import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className='border rounded-md mb-5 py-8 px-10 hover:bg-slate-100 hover:border-slate-100'>
      <h2 className='font-semibold mb-1'>{restaurant.name}</h2>
      {restaurant.cuisines.map((cuisine, index) => (
          <span key={index} className='bg-slate-400 text-white rounded-full px-3 py-1 text-sm mr-1'>
            {cuisine}
          </span>
        ))}
      <p className='text-sm mt-1'>Rating: {restaurant.rating}</p>
      <p className='text-sm'><b>Address:</b> {restaurant.address}</p>
    </div>
  );
};

export default RestaurantCard;
