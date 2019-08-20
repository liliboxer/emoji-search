import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ char, name }) {
  return (
    <section>
      <h4>{name}</h4>
      <p>{char}</p>
    </section>
  );
}

Emoji.propTypes = {
  char: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Emoji;
