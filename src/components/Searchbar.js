import React, { useState } from 'react';
import styled from 'styled-components';

// This component is simply a text input field with a search button
// that calls the parent components getWeather
const Searchbar = ({getWeather}) => {
  const [input, setInput] = useState('');

  return(
    <form onSubmit = {event => {
      event.preventDefault();
      if (input) {
        getWeather(input);
        setInput('');
      };
    }}>
        <StyledInput
          value={input}
          type="text"
          placeholder={'Enter city to search'}
          name="city"
          onChange={event => setInput(event.target.value)}
        />
        <StyledButton type="submit">
          Go
        </StyledButton>
    </form>
  );
};

const StyledInput = styled.input`
  border: none;
  border-radius: 0;
  border-bottom: 2px solid white;
  background: transparent;
  padding: 12px 20px;
  font-size: calc(10px + 2vmin);
  color: white;
`

const StyledButton = styled.button`
  background: transparent;
  border: 3px solid white;
  border-radius: 3px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.4em 0.8em;
  &:hover {
  background: #260A13;
  }
`

export default Searchbar;
