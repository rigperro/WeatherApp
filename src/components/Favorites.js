import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// This component keeps track of and renders the (max. 3) favorites that
// the user can set in the interface.
const Favorites = ({getWeather, setError, city}) => {

  // keep the favorites as an array in the state with a JSON string
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  // update the localStorage when the favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // set the current city to be a favorite
  const handleSet = () => {
    if (city) {
      var arr = [...favorites];
      if (favorites.length > 2) { // if 3 favorites already, remove the last one
        arr.splice(2, 1);
      }
      arr.unshift(city); // add a favorite to the beginning of the array
      setFavorites(arr);
    } else { // if no city is currently chosen, show error 
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
  padding: 0.4em 0.8em;
  &:hover {
  background: #260A13;
  }
`

export default Favorites;
