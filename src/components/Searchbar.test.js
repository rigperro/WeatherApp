import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './Searchbar';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders without chrashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Searchbar />, div);
});

test('Searchbar renders correctly', () => {
  const tree = renderer
    .create(<Searchbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
