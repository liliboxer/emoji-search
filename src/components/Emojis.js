import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';
import styles from './Emojis.css';

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
      <ul className={styles.Emojis}>{emojisElement}</ul>
    </>
  );
}

Emojis.propTypes = {
  emojis: PropTypes.arrayOf(PropTypes.shape({
    codes: PropTypes.string.isRequired,
    char: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired
};

export default Emojis;
