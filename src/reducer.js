import films from './mocks/films.js';
import {GET_FILMS, CHANGE_GENRE, DEFAULT_GENRE} from './constants.js';

const initialState = {
  filmList: films,
  activeGenre: DEFAULT_GENRE,
};

const ActionCreators = {
  changeGenre: (genre) => {
    return {
      type: CHANGE_GENRE,
      payload: genre
    };
  },

  getFilmList: (genre) => {
    let filmList;

    if (genre === DEFAULT_GENRE) {
      filmList = initialState.filmList;
    } else {
      filmList = initialState.filmList.filter((film) => genre === film.genre);
    }
    return {
      type: GET_FILMS,
      payload: filmList
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE: return Object.assign({}, state, {
      activeGenre: action.payload
    });

    case GET_FILMS: return Object.assign({}, state, {
      filmList: action.payload
    });
  }

  return state;
};

export {reducer, ActionCreators};
