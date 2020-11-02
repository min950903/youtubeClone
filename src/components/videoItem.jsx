import React from 'react';
import styles from '../assest/videoItem.module.css';
const VideoItem = ({ video, onDetailClick }) => {
  return (
    <>
      <li className={styles.container}>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
            onClick={onDetailClick}
            name={video.id}
          />
          <div>
            <p className={styles.title}>{video.snippet.title}</p>
            <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default VideoItem;
