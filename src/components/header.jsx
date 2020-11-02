import React from 'react';
import '../assest/header.css';

const Header = ({ onClickHome, onSearch, inputRef }) => {
  return (
    <div className="header">
      <form onSubmit={onSearch}>
        <img
          src={require('../assest/img/youtube-img.png')}
          className="header_img"
          onClick={onClickHome}
          alt=""
        />
        <input
          ref={inputRef}
          placeholder="검색"
          className="input"
          name="search"
        />
      </form>
    </div>
  );
};

export default Header;
