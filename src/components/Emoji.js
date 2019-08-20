import React from 'react';
import PropTypes from 'prop-types';
import styles from './Emoji.css';

function Emoji({ char, name }) {
  return (
    <section className={styles.Emoji}>
      <p>{char}</p>
      <h4>{name}</h4>
    </section>
  );
}

Emoji.propTypes = {
  char: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Emoji;
