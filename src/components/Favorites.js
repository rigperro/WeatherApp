import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Favorites = ({getWeather, setError, city}) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSet = () => {
    if (city) {
      var arr = [...favorites];
      if (favorites.length > 2) {
        arr.splice(2, 1);
      }
      arr.unshift(city);
      setFavorites(arr);
    } else {
      setError("Error: no city chosen")
    }
  }

  return(
    <StyledDiv>
      <StyledButton onClick={handleSet}>Set as favorite</StyledButton>
      {favorites && <p> Your favorites: </p>}
      {(favorites || []).map((item, index) => (
        <StyledButton key={index} onClick={() => {getWeather(item)}}>{item}</StyledButton>
      ))}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 3px solid white;
  color: white;
  margin: 0.5em 1em;
  font-family: 'Oxygen', sans-serif;
  padding: 0.4em 0.8em;
  &:hover {
  background: #260A13;
  }
`

export default Favorites;
