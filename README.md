# My weather app

This is a simple ReactJS application to fetch temperature for a city. It is powered by [OpenWeatherMap Api](http://openweathermap.org/api) and requires an API key placed in an env file in the project root. For example:

**.env.local** file:
```
REACT_APP_API_KEY= ### API KEY HERE ###
```

Install dependencies with:
`npm install`
and run with:
`npm start`
This starts the app in development mode in http://localhost:3000

The app comes with a few smoke and snapshot tests. To run these, install dependencies with `npm install --dev` and run tests with `npm test`.

Production build can be fired by `npm run build`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
