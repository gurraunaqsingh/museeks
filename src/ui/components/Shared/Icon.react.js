import React from 'react';

// List of all the icons we need (tree-shaking ftw)
import PlayIcon from 'mdi-react/PlayIcon';
import PauseIcon from 'mdi-react/PauseIcon';
import FastForwardIcon from 'mdi-react/FastForwardIcon';
import RewindIcon from 'mdi-react/RewindIcon';
import StarIcon from 'mdi-react/StarIcon';
import SettingsIcon from 'mdi-react/SettingsIcon';
import VolumeHighIcon from 'mdi-react/VolumeHighIcon';
import VolumeMediumIcon from 'mdi-react/VolumeMediumIcon';
import VolumeLowIcon from 'mdi-react/VolumeLowIcon';
import VolumeOffIcon from 'mdi-react/VolumeOffIcon';
import PlaylistMinusIcon from 'mdi-react/PlaylistMinusIcon';
import PlaylistPlayIcon from 'mdi-react/PlaylistPlayIcon';


const icons = {
  play: <PlayIcon />,
  pause: <PauseIcon />,
  forward: <FastForwardIcon />,
  backward: <RewindIcon />,
  library: <PlaylistPlayIcon />,
  playlists: <StarIcon />,
  settings: <SettingsIcon />,
  volumeHigh: <VolumeHighIcon />,
  volumeMedium: <VolumeMediumIcon />,
  volumeLow: <VolumeLowIcon />,
  volumeMuted: <VolumeOffIcon />,
  queue: <PlaylistMinusIcon />, // TODO
};

export default (props) => {
  return icons[props.name] || null;
};
