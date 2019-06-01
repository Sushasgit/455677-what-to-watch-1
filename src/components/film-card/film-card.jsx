import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const FilmCard = ({film, isPlaying, handleActiveCard, clearActiveCard}) => {
  return (
    <article
      onMouseEnter={() => {
        handleActiveCard(film.id);
      }}
      className="small-movie-card catalog__movies-card"
      onMouseLeave={clearActiveCard}
    >
      <VideoPlayer
        muted
        isPlaying={isPlaying}
        posterUrl={film.poster_image}
        src={film.preview_video_link}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  film: PropTypes.object.isRequired,
  handleActiveCard: PropTypes.func.isRequired,
  clearActiveCard: PropTypes.func.isRequired,
};

export default FilmCard;
