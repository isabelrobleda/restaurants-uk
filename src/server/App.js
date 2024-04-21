import express from 'express';
import axios from 'axios';
const app = express();

app.get('/api/restaurants', async (req, res) => {
  try {
    const response = await axios.get('https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/LS27HY');
    
    const restaurantsData = response.data.restaurants.slice(0, 10).map(restaurant => ({
      name: restaurant.name,
      cuisines: restaurant.cuisines.map(cuisine => cuisine.name), 
      rating: restaurant.rating.starRating, 
      address: `${restaurant.address.firstLine}, ${restaurant.address.city}, ${restaurant.address.postalCode}` 
    }));
  
    res.json(restaurantsData);
   
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from API');
  }
});

export default app;
