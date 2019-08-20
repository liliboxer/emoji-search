import React, { Component } from 'react';
import Search from './Search';
import Emojis from './Emojis';
import { emojiList } from '../services/emojiData';
import styles from './EmojisContainer.css';


export default class EmojisContainer extends Component {
  state = {
    text: ''
  }
  
  handleSearchUpdate = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    return (
      <section className={styles.EmojisContainer}>
        <h1>Emoji Searcher</h1>
        <Search text={this.state.text} handleSearchUpdate={this.handleSearchUpdate}/>
        <Emojis emojis={emojiList.filter(emoji => emoji.name.includes(this.state.text))}/>
      </section>
    );
  }
}
