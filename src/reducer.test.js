import {reducer} from './reducer.js';
// import films from './mocks/films.js';
import films from './mocks/films.js';
import {CHANGE_GENRE, GET_FILMS} from './constants.js';

it(`Reducer with initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    filmList: films,
    activeGenre: `All genres`
  });
});

it(`Reducer - active genre (filter)`, () => {
  expect(reducer(
      {
        filmList: films,
        activeGenre: `All genres`
      },
      {
        type: CHANGE_GENRE,
        payload: `Fantasy`
      }
  )
  ).toEqual({
    filmList: films,
    activeGenre: `Fantasy`
  });
});

it(`Reducer returns filmList according to filter`, () => {
  expect(reducer(
      {
        filmList: films,
        activeGenre: `Fantasy`
      },
      {
        type: GET_FILMS,
        payload: films.filter((film) => film.genre === `Fantasy`)
      }
  )
  ).toEqual({
    filmList: films.filter((film) => film.genre === `Fantasy`),
    activeGenre: `Fantasy`
  });
});
