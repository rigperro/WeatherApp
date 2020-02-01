import React, { useState } from 'react';
import Searchbar from './components/Searchbar'
import WeatherDisplay from './components/WeatherDisplay'
import Favorites from './components/Favorites'
import * as Api from './api'
import styled from 'styled-components';

const App = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [errorMessage, setError] = useState('');

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
    <StyledDiv className="App">
      <StyledHeader className="App-header">
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
  font-family: 'Oxygen', sans-serif;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default App;
