import React from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from '../../reducer.js';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen.jsx';

import withData from '../../hocs/with-data/with-data.jsx';

const App = ({onGenreChange, activeGenre, genresList, filmList}) => {
  return (
    <MainScreen
      genres={genresList}
      films={filmList}
      activeGenre={activeGenre}
      onGenreChange={onGenreChange}
    />
  );
};

App.propTypes = {
  filmList: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  activeGenre: PropTypes.string,
  genresList: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filmList: state.filmList,
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (event, genre) => {
    event.preventDefault();

    dispatch(ActionCreators.changeGenre(genre));
    dispatch(ActionCreators.getFilmList(genre));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(withData(App));
