import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen.jsx';

it(`MainScreen run correctly`, () => {
  const tree = renderer
    .create(<MainScreen
      films={[]}
      onGenreChange={jest.fn()}
      genres={[]}
      activeGenre={``}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
