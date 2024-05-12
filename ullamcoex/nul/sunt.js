const axios = require('axios');

// Function to make a GET request
const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Example usage
fetchData('https://www.example.com