import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';

it(`GenreList run correctly`, () => {
  const tree = renderer
    .create(<GenreList
      genres={[]}
      onGenreChange={jest.fn()}
      activeGenre={``}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
