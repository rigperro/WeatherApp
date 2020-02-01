import React from 'react';

const WeatherDisplay = ({city, temp, error}) => {
  return(
    <div>
    {city ?
      <>
      <p>Current weather for: <b>{city}</b></p>
      <p>Temperature: <b>{temp} °C</b></p>
      </>
    :
      <>
        <p> To use this app, type the name of a city in the field below
        and press Enter or Go! </p>
        {<p>{ error }</p>}
      </>
      }
    </div>
  );
};

export default WeatherDisplay;
