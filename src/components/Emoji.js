import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ symbol, name }) {
  return (
    <>
      <p>{symbol}</p>
      <h4>{name}</h4>
    </>
  );
}

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Emoji;
