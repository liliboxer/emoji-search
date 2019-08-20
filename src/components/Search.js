import React from 'react';
import PropTypes from 'prop-types';

function Search({ text, handleSearchUpdate }) {
  return (
    <form>
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
