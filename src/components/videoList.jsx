import React from 'react';
import VideoItem from './videoItem';
import styles from '../assest/videoList.module.css';

const VideoList = ({ videoList, onDetailClick }) => {
  return (
    <div className={styles.videos}>
      {videoList !== undefined &&
        videoList.map((video) => (
          <VideoItem
            key={video.etag}
            video={video}
            onDetailClick={onDetailClick}
          />
        ))}
    </div>
  );
};

export default VideoList;
