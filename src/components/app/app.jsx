import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from '../../reducer.js';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen.jsx';
import films from '../../mocks/films.js';
import {DEFAULT_GENRE} from '../../constants.js';

class App extends PureComponent {

  componentWillMount() {
    this.findAllGenres(films);
  }

  findAllGenres(array) {
    let genres = array.map((movie) => movie.genre);
    let genresList = [DEFAULT_GENRE, ...new Set(genres)];
    this.setState({
      genresList
    });
  }

  render() {
    const {genresList} = this.state;
    const {onGenreChange, activeGenre} = this.props;
    return (
      <MainScreen
        genres={genresList}
        films={this.props.filmList}
        activeGenre={activeGenre}
        onGenreChange={onGenreChange}
      />
    );
  }
}

App.propTypes = {
  filmList: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  activeGenre: PropTypes.string,
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
