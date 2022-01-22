import React from 'react';

const Video = ({handleClose}) => {
  return (
    <>
      <VideoPlayer
        onClose={() => {
          handleClose();
        }}
        onEnd={() => {
          handleClose();
        }}
        onBack={() => {
          handleClose();
        }}
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        fullScreenOrientation="all"
      />
    </>
  );
};

export default Video;
