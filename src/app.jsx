import React, { useEffect, useRef, useState } from 'react';
import { getSearchList, getVideoList } from './api/youtubeAPI';
import './app.css';
import DetailContent from './components/detailContent';
import Header from './components/header';
import VideoList from './components/videoList';

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
    const videoID = event.target.name;
    const video = videoList.filter((video) => videoID === video.id);

    setDetailVideo(video[0]);
    setIsDetail(true);
  };

  const onClickHome = () => {
    setIsDetail(false);
  };

  const onSearch = (event) => {
    event.preventDefault();

    const searchKeyWord = inputRef.current.value;
    getSearchList(searchKeyWord).then((response) => {
      setVideoList(response);
    });

    inputRef.current.value = '';
    setIsDetail(false);
  };

  return (
    <div className="default">
      <Header
        onClickHome={onClickHome}
        onSearch={onSearch}
        inputRef={inputRef}
      />
      {isDetail ? (
        <DetailContent detailVideo={detailVideo} />
      ) : (
        <VideoList videoList={videoList} onDetailClick={onDetailClick} />
      )}
    </div>
  );
};

export default App;
