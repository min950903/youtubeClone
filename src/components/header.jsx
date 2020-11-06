import React from 'react';
import { memo } from 'react';
import styles from '../assest/header.module.css';

const Header = memo(({ onClickHome, onSearch, inputRef }) => {
  return (
    <form onSubmit={onSearch} className={styles.header}>
      <div className={styles.logo}>
        <img
          src={require('../assest/img/youtube-icon.png')}
          className={styles.img}
          onClick={onClickHome}
          alt=""
        />
        <h1 className={styles.logoText} onClick={onClickHome}>
          YOUTUBE
        </h1>
      </div>
      <input
        ref={inputRef}
        placeholder="검색"
        className={styles.input}
        name="search"
      />
    </form>
  );
});

export default Header;
