import React, { useEffect, useRef, useState } from 'react';

import { getVideoList } from './api/youtubeAPI';
import './app.css';
import DetailContent from './components/detailContent';
import Header from './components/header';
import MainContents from './components/mainContents';

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [detailVideo, setDetailVideo] = useState();

  const inputRef = useRef(null);

  useEffect(() => {
    getVideoList().then((response) => {
      setVideoList(response);
    });
  }, []);

  const onDetailClick = (event) => {
    const clickedVideo = event.target.name;
    const video = videoList.filter(
      (video) => clickedVideo === video.id.videoId,
    );

    setDetailVideo(video[0]);
    setIsDetail(true);
  };

  const onClickHome = () => {
    setIsDetail(false);
  };

  const onSearch = (event) => {
    event.preventDefault();

    const searchKeyWord = inputRef.current.value;
    getVideoList(searchKeyWord).then((response) => {
      setVideoList(response);
    });

    setIsDetail(false);
  };

  return (
    <>
      <Header
        onClickHome={onClickHome}
        onSearch={onSearch}
        inputRef={inputRef}
      />
      {isDetail ? (
        <DetailContent detailVideo={detailVideo} />
      ) : (
        <MainContents videoList={videoList} onDetailClick={onDetailClick} />
      )}
    </>
  );
};

export default App;
