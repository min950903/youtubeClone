import React from 'react';
import '../assest/main.css';

const MainContents = ({ videoList, onDetailClick }) => {
  return (
    <>
      {videoList !== undefined &&
        videoList.map((video) => (
          <div key={video.etag} className="mainContents">
            <div className="content">
              <img
                src={video.snippet.thumbnails.default.url}
                alt="imgFile" 
                onClick={onDetailClick}
                name={video.id.videoId}
              />
              <h3>{video.snippet.title}</h3>
              <h5>{video.snippet.channelTitle}</h5>
            </div>
          </div>
        ))}
    </>
  );
};

export default MainContents;
