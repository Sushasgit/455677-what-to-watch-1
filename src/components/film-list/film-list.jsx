import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {}
    };

    this._handleActiveCard = this._handleActiveCard.bind(this);
  }

  _handleActiveCard(activeCard) {
    this.setState({
      activeCard
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {
          this.props.data.map((film) => {
            return (
              <FilmCard onClick={this._handleActiveCard} key={film.id} film={film} />
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
