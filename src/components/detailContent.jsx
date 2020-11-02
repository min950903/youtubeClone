import React from 'react';
import '../assest/detail.css';

const DetailContent = ({ detailVideo }) => {
  return (
    <>
      {detailVideo && (
        <div>
          <iframe
            className="videoPlayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${detailVideo.id.videoId}`}
            frameBorder="0"
            title={detailVideo.id.videoId}
          />
          <h2>{detailVideo.snippet.title}</h2>
          <h5>{detailVideo.snippet.description}</h5>
        </div>
      )}
    </>
  );
};

export default DetailContent;
