import {createSelector} from 'reselect';
import NameSpaces from '../name-spaces.js';

const NAME_SPACE = NameSpaces.DATA;

export const getAllFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getGenres = createSelector(
    getAllFilms, (films) => films.map((film) => film.genre)
);

export const getUniqGenres = createSelector(
    getGenres, (genres) => ([`All genres`, ...new Set(genres)])
);

export const getFilteredFilms = createSelector(
    getAllFilms,
    getActiveGenre,
    (films, activeGenre) => {
      return (activeGenre === `All genres`) ? films : films.filter((film) => film.genre === activeGenre);
    }
);
