import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDisplay from './WeatherDisplay';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders without chrashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherDisplay />, div);
});

test('WeatherDisplay renders correctly', () => {
  const tree = renderer
    .create(<WeatherDisplay city="Helsinki" temp="0" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
