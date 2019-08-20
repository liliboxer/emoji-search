import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

function Search({ text, handleSearchUpdate }) {
  return (
    <form className={styles.Search}>
      <input
        type="text"
        value={text}
        onChange={handleSearchUpdate}
        placeholder="search for an emoji!">
      </input>
    </form>
  );
}

Search.propTypes = {
  text: PropTypes.string.isRequired,
  handleSearchUpdate: PropTypes.func.isRequired
};

export default Search;
