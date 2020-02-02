import React, { useState } from 'react';
import Searchbar from './components/Searchbar'
import WeatherDisplay from './components/WeatherDisplay'
import Favorites from './components/Favorites'
import * as Api from './api'
import styled from 'styled-components';

// Main App
const App = () => {
  // Keep track of searched city, it's temperature and an error message in states
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [errorMessage, setError] = useState('');

  // This method is used to call the API and get the temperature or error
  const getWeather = input => {
    Api.call(input).then((res)=> {
      setCity(res.name);
      setTemp(res.main.temp);
      setError('');
    }).catch((err) => {
      console.log(err);
      setCity('')
      setTemp('');
      setError("Error: " + err.message);
    });
  }

  return (
    <StyledDiv>
      <StyledHeader>
        <h1>My weather app</h1>
        <WeatherDisplay
          city={city}
          temp={temp}
          error={errorMessage}
        />
        <Searchbar getWeather={getWeather}/>
        <Favorites
          getWeather={getWeather}
          setError={setError}
          city={city}
        />
      </StyledHeader>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
`
const StyledHeader = styled.header`
  background-color: #38111e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default App;
