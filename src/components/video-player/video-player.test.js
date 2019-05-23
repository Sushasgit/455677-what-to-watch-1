import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

it(`VideoPlayer run correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={``}
      isPlaying={true}
      posterUrl={``}
      muted={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
