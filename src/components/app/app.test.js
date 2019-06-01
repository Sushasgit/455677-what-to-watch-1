import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`App correctly renders`, () => {
  const tree = renderer
  .create(<App
    films={[]}
    activeGenre={``}
    onGenreChange={jest.fn()}
    genres={[]}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
