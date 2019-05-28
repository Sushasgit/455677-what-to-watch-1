import React from 'react';
import films from '../../mocks/films.js';
import {DEFAULT_GENRE} from '../../constants';

const withData = (Component) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this._findAllData = this._findAllData.bind(this);
    }

    componentWillMount() {
      this._findAllData(films);
    }

    _findAllData(array) {
      let genres = array.map((movie) => movie.genre);
      let genresList = [DEFAULT_GENRE, ...new Set(genres)];
      this.setState({
        genresList
      });
    }

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
        />
      );
    }
  }

  return WithData;
};

export default withData;
