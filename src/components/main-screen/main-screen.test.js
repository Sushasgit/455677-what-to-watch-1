import React from 'react';
import renderer from 'react-test-renderer';

import {BrowserRouter as Router} from 'react-router-dom';

import MainScreen from './main-screen.jsx';

const genres = [`All genres`, `Fantasy`, `Dramas`, `History`, `Trillers`];

it(`MainScreen run correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <MainScreen
            films={[]}
            onGenreChange={jest.fn()}
            genres={genres}
            activeGenre={``}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
