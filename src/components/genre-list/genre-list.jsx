import React from 'react';
import PropTypes from 'prop-types';

const GenreList = ({genres, onGenreChange, activeGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                onGenreChange(event, genre);
              }}
              className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
              <a href="#" className="catalog__genres-link">{genre}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func,
  activeGenre: PropTypes.string
};

export default GenreList;
