import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

function Emojis({ emojis }) {
  const emojisElement = emojis.map(emoji => (
    <li key={emoji.codes}>
      <Emoji 
        name={emoji.name}
        char={emoji.char}
      />
    </li>
  ));

  return (
    <>
      <ul>{emojisElement}</ul>
    </>
  );
}

Emojis.propTypes = {
  emojis: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Emojis;
