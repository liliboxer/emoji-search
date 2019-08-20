import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ symbol, name }) {
  return (
    <section>
      <h4>{name}</h4>
      <p>{symbol}</p>
    </section>
  );
}

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Emoji;
