import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card.jsx';
import withActiveCard from '../../hocs/with-active-card/with-active-card.jsx';

const FilmList = ({data = [], handleActiveCard, clearActiveCard, activeCard}) => {
  return (
    <div className="catalog__movies-list">
      {
        data.map((film) => {
          return (
            <FilmCard
              key={film.id}
              film={film}
              handleActiveCard={handleActiveCard}
              clearActiveCard={clearActiveCard}
              isPlaying={film.id === activeCard}
            />
          );
        })
      }
    </div>
  );
};

FilmList.propTypes = {
  data: PropTypes.array.isRequired,
  activeCard: PropTypes.number,
  clearActiveCard: PropTypes.func,
  handleActiveCard: PropTypes.func,
};

export default withActiveCard(FilmList);
