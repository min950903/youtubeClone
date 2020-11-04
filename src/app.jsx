import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getSearchList, getVideoList } from './api/youtubeAPI';
import styles from './assest/app.module.css';
import DetailContent from './components/detailContent';
import Header from './components/header';
import VideoList from './components/videoList';

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const inputRef = useRef(null);

  // TODO 유니코드 문자 수정
  const decode = require('unescape');

  useEffect(() => {
    getVideoList().then((response) => {
      setVideoList(response);
    });
  }, []);

  const onVideoClick = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  const onClickHome = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  const onSearch = useCallback((event) => {
    event.preventDefault();

    setSelectedVideo(null);

    const searchKeyWord = inputRef.current.value;
    getSearchList(searchKeyWord).then((response) => {
      const changeResponseId = response.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
      setVideoList(changeResponseId);
    });

    inputRef.current.value = '';
  }, []);

  return (
    <div className={styles.app}>
      <Header
        onClickHome={onClickHome}
        onSearch={onSearch}
        inputRef={inputRef}
      />
      <div className={styles.container}>
        {selectedVideo && (
          <div className={styles.detail}>
            <DetailContent selectedVideo={selectedVideo} />
          </div>
        )}
        <div className={styles.videos}>
          <VideoList
            videoList={videoList}
            onVideoClick={onVideoClick}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
