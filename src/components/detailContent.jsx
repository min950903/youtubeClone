import React from 'react';
import styles from '../assets/detail.module.css';

const DetailContent = ({ selectedVideo }) => {
  return (
    <>
      {selectedVideo && (
        <div className={styles.detail}>
          <iframe
            className={styles.videoPlayer}
            type="text/html"
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            frameBorder="0"
            allowFullScreen
            title={selectedVideo.id}
          />
          <h2>{selectedVideo.snippet.title}</h2>
          <pre className={styles.description}>
            {selectedVideo.snippet.description}
          </pre>
        </div>
      )}
    </>
  );
};

export default DetailContent;
