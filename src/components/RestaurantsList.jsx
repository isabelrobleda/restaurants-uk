import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Failed to fetch restaurants', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
    </div>
  );
};

export default RestaurantsList;
