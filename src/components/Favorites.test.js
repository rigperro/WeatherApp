import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders without chrashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Favorites />, div);
});

test('Favorites renders correctly', () => {
  const tree = renderer
    .create(<Favorites />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
