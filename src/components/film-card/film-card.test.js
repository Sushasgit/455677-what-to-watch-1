import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';

it(`FilmCard run correctly`, () => {
  const tree = renderer
    .create(<FilmCard
      film={{}}
      onClick={jest.fn()}
      isPlaying={true}
      handleActiveCard={jest.fn()}
      clearActiveCard={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
