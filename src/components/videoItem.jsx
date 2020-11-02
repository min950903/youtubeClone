import React from 'react';

const VideoItem = ({ video, onDetailClick }) => {
  return (
    <>
      <div className="mainContents">
        <div className="content">
          <img
            src={video.snippet.thumbnails.default.url}
            alt="imgFile"
            onClick={onDetailClick}
            name={video.id}
          />
          <h3>{video.snippet.title}</h3>
          <h5>{video.snippet.channelTitle}</h5>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
