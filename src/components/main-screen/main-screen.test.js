import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen.jsx';

it(`MainScreen run correctly`, () => {
  const tree = renderer
    .create(<MainScreen
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
