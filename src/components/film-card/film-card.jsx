import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({film, onClick}) => {
  return <article className="small-movie-card catalog__movies-card">
    <button
      onClick={() => {
        onClick(film);
      }}
      className="small-movie-card__play-btn"
      type="button"
    >
      Play
    </button>
    <div className="small-movie-card__image">
      <img src={film.posterUrl} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilmCard;
