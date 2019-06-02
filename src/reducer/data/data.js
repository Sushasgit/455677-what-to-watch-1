const initialState = {
  films: [],
  activeGenre: `All genres`,
};

const ActionType = {
  'CHANGE_ACTIVE_GENRE': `CHANGE_ACTIVE_GENRE`,
  'GET_GENRE_FILMS': `GET_GENRE_FILMS`,
  'GET_FILMS': `GET_FILMS`,
};

const ActionCreators = {
  changeActiveGenre: (genre) => {
    return {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: genre,
    };
  },

  getGenreFilms: (genre) => {
    return {
      type: ActionType.GET_GENRE_FILMS,
      payload: genre
    };
  },

  loadFilms: (fetchedFilms) => {
    return {
      type: ActionType.GET_FILMS,
      payload: fetchedFilms
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(ActionCreators.loadFilms(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_GENRE_FILMS:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILMS:
      return Object.assign({}, state, {
        films: action.payload
      });
  }

  return state;
};

export {
  reducer,
  ActionCreators,
  ActionType,
  Operation
};

