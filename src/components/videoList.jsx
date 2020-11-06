import React from 'react';
import VideoItem from './videoItem';
import styles from '../assest/videoList.module.css';

const VideoList = ({ videoList, onVideoClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videoList !== undefined &&
        videoList.map((video) => (
          <VideoItem
            key={video.etag}
            video={video}
            onVideoClick={onVideoClick}
            display={display}
          />
        ))}
    </ul>
  );
};

export default VideoList;
