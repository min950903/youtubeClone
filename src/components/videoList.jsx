import React from 'react';
import '../assest/main.css';
import VideoItem from './videoItem';

const VideoList = ({ videoList, onDetailClick }) => {
  return (
    <>
      {videoList !== undefined &&
        videoList.map((video) => (
          <VideoItem
            key={video.etag}
            video={video}
            onDetailClick={onDetailClick}
          />
        ))}
    </>
  );
};

export default VideoList;
