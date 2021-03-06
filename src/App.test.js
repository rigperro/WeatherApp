import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders without chrashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('App renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
