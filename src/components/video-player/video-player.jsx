import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;

    if (video) {
      video.src = this.props.src;
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = ``;
  }

  render() {
    const {posterUrl, muted} = this.props;

    return (
      <video
        className="small-movie-card__video"
        muted={muted}
        ref={this._videoRef}
        poster={posterUrl}
      />
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired,
  posterUrl: PropTypes.string,
  muted: PropTypes.bool,
};

export default VideoPlayer;
