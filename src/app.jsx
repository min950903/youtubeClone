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

  const decode = require('unescape');
  const changeUnicodeInVideo = useCallback(
    (response) => {
      const changedvideos = response.map((video) => ({
        ...video,
        snippet: {
          ...video.snippet,
          description: decode(video.snippet.description),
          title: decode(video.snippet.title),
        },
      }));

      return changedvideos;
    },
    [decode],
  );

  useEffect(() => {
    getVideoList().then((response) => {
      setVideoList(changeUnicodeInVideo(response));
    });
  }, [changeUnicodeInVideo]);

  const onVideoClick = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  const onClickHome = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  const onSearch = useCallback(
    (event) => {
      event.preventDefault();

      setSelectedVideo(null);

      const searchKeyWord = inputRef.current.value;
      getSearchList(searchKeyWord).then((response) => {
        setVideoList(changeUnicodeInVideo(response));
      });

      inputRef.current.value = '';
    },
    [changeUnicodeInVideo],
  );

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
