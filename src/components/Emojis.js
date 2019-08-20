import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

function Emojis({ emojis }) {
  const emojiList = emojis.map(emoji => (
    <li key={emoji.codes}>
      <Emoji 
        symbol={emoji.symbol}
        name={emoji.name}
      />
    </li>
  ));

  return (
    <>
      <ul>{emojiList}</ul>
    </>
  );
}

Emojis.propTypes = {
  emojis: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Emojis;
