import axios from 'axios';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_API_KEY;

// Function to call the API with axios, only interested in GET
export const call = city => {
  const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  return axios.get(url)
  .then(res => res.data)
  .catch(err => {
    throw err;
  });
};
