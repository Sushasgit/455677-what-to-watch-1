import React from 'react';
import PropTypes from 'prop-types';

const FilmList = (props) => {
  return <div className="catalog__movies-list">
    {
      props.data.map((film) => {
        return (
          <article key={film.id} className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src={film.posterUrl} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
            </h3>
          </article>
        );
      })
    }
  </div>;
};

FilmList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FilmList;
