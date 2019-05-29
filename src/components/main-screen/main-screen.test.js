import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen.jsx';

const genres = [`All genres`, `Fantasy`, `Dramas`, `History`, `Trillers`];

it(`MainScreen run correctly`, () => {
  const tree = renderer
    .create(<MainScreen
      films={[]}
      onGenreChange={jest.fn()}
      genres={genres}
      activeGenre={``}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
