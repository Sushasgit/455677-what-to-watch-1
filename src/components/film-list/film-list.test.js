import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from './film-list.jsx';

it(`FilmList run correctly`, () => {
  const tree = renderer
    .create(<FilmList
      data={[]}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
