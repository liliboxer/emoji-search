import React, { Component } from 'react';
import Search from './Search';
import Emojis from './Emojis';
import { emojiList } from '../services/emojiData';


export default class EmojisContainer extends Component {
  state = {
    text: ''
  }
  
  handleSearchUpdate = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    return (
      <>
        <Search text={this.state.text} handleSearchUpdate={this.handleSearchUpdate}/>
        <Emojis emojis={emojiList.filter(emoji => emoji.name.includes(this.state.text))}/>
      </>
    );
  }
}
