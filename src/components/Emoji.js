import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ emoji, name }) {
  return (
    <>
      <p>{emoji}</p>
      <h4>{name}</h4>
    </>
  );
}

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Emoji;
