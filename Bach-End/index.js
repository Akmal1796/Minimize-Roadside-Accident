const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// Your Weather API key from OpenWeatherMap
const WEATHER_API_KEY = 'your-weather-api-key'; // Replace with your actual Weather API key

// Route to fetch weather data based on lat and lng
app.post('/get-weather', async (req, res) => {
  const { lat, lng } = req.body;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    // OpenWeatherMap API URL with latitude and longitude
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`;

    // Fetch weather data from OpenWeatherMap
    const weatherResponse = await axios.get(weatherUrl);

    // Extract relevant data from API response
    const weatherData = {
      description: weatherResponse.data.weather[0].description,
      temperature: weatherResponse.data.main.temp,
      location: weatherResponse.data.name,
    };

    // Send the weather data back to the frontend
    res.json(weatherData);

  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Start the Express server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
