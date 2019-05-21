import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card.jsx';

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.timeoutId = null;
    this.state = {
      activeCard: {}
    };

    this._handleActiveCard = this._handleActiveCard.bind(this);
    this._clearActiveCard = this._clearActiveCard.bind(this);
  }

  _handleActiveCard(activeCard) {
    this.timeoutId = setTimeout(() => {
      this.setState({
        activeCard
      });
    }, 1000);
  }

  _clearActiveCard() {
    clearTimeout(this.timeoutId);
    this.setState({
      activeCard: null,
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {
          this.props.data.map((film) => {
            return (
              <FilmCard
                key={film.id}
                film={film}
                handleActiveCard={this._handleActiveCard}
                clearActiveCard={this._clearActiveCard}
                isPlaying={film.id === this.state.activeCard}
              />
            );
          })
        }
      </div>
    );
  }
}

FilmList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FilmList;
