import React from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from '../../reducer/data/data.js';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen.jsx';

import {getFilteredFilms, getUniqGenres, getActiveGenre} from '../../reducer/data/selectors.js';

const App = ({onGenreChange, activeGenre, genres, films}) => {
  return (
    <MainScreen
      genres={genres}
      films={films}
      activeGenre={activeGenre}
      onGenreChange={onGenreChange}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  activeGenre: PropTypes.string,
  genres: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    films: getFilteredFilms(state),
    genres: getUniqGenres(state),
    activeGenre: getActiveGenre(state),
  });
};
const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (evt, genre) => {
    evt.preventDefault();
    dispatch(ActionCreators.changeActiveGenre(genre));
    dispatch(ActionCreators.getGenreFilms(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
